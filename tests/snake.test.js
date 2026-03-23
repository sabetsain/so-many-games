const { describe, it } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const SNAKE_HTML = fs.readFileSync(path.join(__dirname, '..', 'snake.html'), 'utf8');
const SNAKE_JS = fs.readFileSync(path.join(__dirname, '..', 'assets', 'snake.js'), 'utf8');
const STYLES_CSS = fs.readFileSync(path.join(__dirname, '..', 'assets', 'styles.css'), 'utf8');

function createGameDOM() {
    // Strip the <script> and <link> tags so jsdom doesn't try to fetch them
    const strippedHtml = SNAKE_HTML
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<link[^>]*stylesheet[^>]*>/gi, '');

    const dom = new JSDOM(strippedHtml, {
        runScripts: 'dangerously',
        url: 'http://localhost',
        pretendToBeVisual: true,
    });

    const win = dom.window;

    // jsdom doesn't implement canvas — stub getContext
    const canvasProto = win.HTMLCanvasElement.prototype;
    canvasProto.getContext = function () {
        return {
            fillStyle: '',
            strokeStyle: '',
            lineWidth: 1,
            shadowBlur: 0,
            shadowColor: '',
            fillRect() {},
            strokeRect() {},
            clearRect() {},
            beginPath() {},
            moveTo() {},
            lineTo() {},
            stroke() {},
            fill() {},
            arc() {},
            closePath() {},
        };
    };

    // Track setInterval calls to detect game loop starts
    const intervals = [];
    const origSetInterval = win.setInterval.bind(win);
    win.setInterval = function (fn, ms) {
        const id = origSetInterval(fn, ms);
        intervals.push(id);
        return id;
    };

    // Load the game script via eval
    win.eval(SNAKE_JS);

    return { dom, win, intervals };
}

function fireKey(win, key) {
    const event = new win.KeyboardEvent('keydown', { key, bubbles: true });
    win.document.dispatchEvent(event);
}

describe('Snake game — game over input blocking', () => {
    it('should NOT allow arrow keys to restart the game after game over', () => {
        const { win, intervals } = createGameDOM();

        // Initial draw created no intervals
        const initialCount = intervals.length;

        // Start the game with an arrow key
        fireKey(win, 'ArrowRight');
        assert.strictEqual(intervals.length, initialCount + 1,
            'Arrow key should start the game loop from idle');

        // Trigger game over
        win.gameOver();
        const gameOverElement = win.document.getElementById('gameOver');
        assert.strictEqual(gameOverElement.style.display, 'block',
            'Game over overlay should be visible');

        const countAfterGameOver = intervals.length;

        // Now press arrow keys — game should NOT restart (no new interval)
        fireKey(win, 'ArrowDown');
        assert.strictEqual(intervals.length, countAfterGameOver,
            'Arrow keys should NOT start a new game loop after game over');
    });

    it('should allow arrow keys to start the game from initial idle', () => {
        const { win, intervals } = createGameDOM();

        const initialCount = intervals.length;

        fireKey(win, 'ArrowRight');
        assert.strictEqual(intervals.length, initialCount + 1,
            'Arrow keys should start the game loop from initial idle');

        // Clean up
        intervals.forEach(id => win.clearInterval(id));
    });

    it('should completely ignore all arrow key input after game over', () => {
        const { win, intervals } = createGameDOM();

        // Start moving right, then trigger game over
        fireKey(win, 'ArrowRight');
        win.gameOver();

        const countAfterGameOver = intervals.length;

        // Mash all arrow keys during game over
        fireKey(win, 'ArrowDown');
        fireKey(win, 'ArrowLeft');
        fireKey(win, 'ArrowUp');
        fireKey(win, 'ArrowRight');

        // No new game loop should have started
        assert.strictEqual(intervals.length, countAfterGameOver,
            'No new intervals should be created from arrow keys during game over');

        // The game-over overlay should still be showing
        const gameOverEl = win.document.getElementById('gameOver');
        assert.strictEqual(gameOverEl.style.display, 'block',
            'Game over overlay must remain visible');

        // Now test that direction wasn't silently changed:
        // Restart, then immediately call update() WITHOUT pressing any arrow key.
        // If direction was leaked, the snake will move. If properly blocked,
        // dx/dy are still 0 from restartGame() and the snake stays put.
        win.restartGame();

        // Don't press any arrow key — just call update directly
        win.update();
        win.update();
        win.update();

        // The snake should still be at start position (10,10) since dx=dy=0
        // and no direction was set. It should NOT have died.
        assert.strictEqual(gameOverEl.style.display, 'none',
            'Snake should be alive — no leaked direction from game-over input');

        // Clean up
        intervals.forEach(id => win.clearInterval(id));
    });

    it('should allow restarting via restartGame after game over, then arrow keys start a new game', () => {
        const { win, intervals } = createGameDOM();

        // Start and trigger game over
        fireKey(win, 'ArrowRight');
        win.gameOver();

        const countAfterGameOver = intervals.length;

        // Restart the game (this is the "Read Again" button path)
        win.restartGame();

        // Now arrow keys should work again to start
        fireKey(win, 'ArrowDown');
        assert.strictEqual(intervals.length, countAfterGameOver + 1,
            'Arrow keys should start a new game loop after explicit restart');

        // Clean up
        intervals.forEach(id => win.clearInterval(id));
    });
});

describe('Snake game — page centering', () => {
    it('body should center the game-container', () => {
        // The body rule should include centering properties
        const bodyRuleMatch = STYLES_CSS.match(/body\s*\{[^}]*\}/);
        assert.ok(bodyRuleMatch, 'Should have a body CSS rule');

        const bodyRule = bodyRuleMatch[0];
        assert.ok(
            bodyRule.includes('justify-content') && bodyRule.includes('center'),
            'body should have justify-content: center for horizontal centering'
        );
        assert.ok(
            bodyRule.includes('align-items') && bodyRule.includes('center'),
            'body should have align-items: center for vertical centering'
        );
    });
});
