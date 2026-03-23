const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('finalScore');
const gameOverElement = document.getElementById('gameOver');

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [
    { x: 10, y: 10 }
];
let food = { x: 15, y: 15 };
let dx = 0;
let dy = 0;
let score = 0;
let gameRunning = false;
let isGameOver = false;
let gameLoop;

// Event listener for keyboard controls
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
    if (!gameRunning && !isGameOver && (e.key === 'ArrowUp' || e.key === 'ArrowDown' ||
        e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        startGame();
    }

    if (e.key === ' ') {
        e.preventDefault();
        restartGame();
        return;
    }

    // Ignore direction changes when game is not actively running
    if (!gameRunning) return;

    // Prevent snake from reversing
    if (e.key === 'ArrowUp' && dy === 0) {
        dx = 0;
        dy = -1;
    } else if (e.key === 'ArrowDown' && dy === 0) {
        dx = 0;
        dy = 1;
    } else if (e.key === 'ArrowLeft' && dx === 0) {
        dx = -1;
        dy = 0;
    } else if (e.key === 'ArrowRight' && dx === 0) {
        dx = 1;
        dy = 0;
    }
}

function startGame() {
    gameRunning = true;
    gameLoop = setInterval(update, 100);
}

function update() {
    if (!gameRunning) return;

    // Move snake
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // Check wall collision
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        gameOver();
        return;
    }

    // Check self collision
    for (let segment of snake) {
        if (head.x === segment.x && head.y === segment.y) {
            gameOver();
            return;
        }
    }

    snake.unshift(head);

    // Check food collision
    if (head.x === food.x && head.y === food.y) {
        score++;
        scoreElement.textContent = String(score).padStart(3, '0');
        generateFood();
    } else {
        snake.pop();
    }

    draw();
}

function draw() {
    // CRT black background with slight green tint
    ctx.fillStyle = '#000800';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Phosphor green grid — visible, chunky
    ctx.strokeStyle = 'rgba(51, 255, 102, 0.12)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
    }

    // Border glow around play area
    ctx.strokeStyle = 'rgba(51, 255, 102, 0.3)';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);

    // Draw snake — bright phosphor green, chunky blocks
    snake.forEach((segment, index) => {
        const brightness = Math.max(0.4, 1 - (index / Math.max(snake.length, 1)) * 0.6);

        if (index === 0) {
            // Head — full bright with heavy glow
            ctx.fillStyle = '#33ff66';
            ctx.shadowBlur = 15;
            ctx.shadowColor = 'rgba(51, 255, 102, 0.9)';
        } else {
            // Body — dimming phosphor trail
            const g = Math.round(255 * brightness);
            const b = Math.round(102 * brightness);
            ctx.fillStyle = `rgb(20, ${g}, ${b})`;
            ctx.shadowBlur = 8 * brightness;
            ctx.shadowColor = `rgba(51, 255, 102, ${0.5 * brightness})`;
        }

        // Chunky pixel blocks with 1px gap
        ctx.fillRect(
            segment.x * gridSize + 1,
            segment.y * gridSize + 1,
            gridSize - 2,
            gridSize - 2
        );

        ctx.shadowBlur = 0;
    });

    // Draw food — blinking red pixel
    const blink = Math.sin(Date.now() / 150) > -0.3;
    if (blink) {
        ctx.fillStyle = '#ff3344';
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(255, 51, 68, 0.8)';
        ctx.fillRect(
            food.x * gridSize + 2,
            food.y * gridSize + 2,
            gridSize - 4,
            gridSize - 4
        );
        ctx.shadowBlur = 0;
    }
}

function generateFood() {
    while (true) {
        food = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };

        // Make sure food doesn't spawn on snake
        let validPosition = true;
        for (let segment of snake) {
            if (food.x === segment.x && food.y === segment.y) {
                validPosition = false;
                break;
            }
        }

        if (validPosition) break;
    }
}

function gameOver() {
    gameRunning = false;
    isGameOver = true;
    clearInterval(gameLoop);
    finalScoreElement.textContent = score;
    gameOverElement.style.display = 'block';
}

function restartGame() {
    snake = [{ x: 10, y: 10 }];
    food = { x: 15, y: 15 };
    dx = 0;
    dy = 0;
    score = 0;
    scoreElement.textContent = '000';
    gameOverElement.style.display = 'none';
    gameRunning = false;
    isGameOver = false;
    clearInterval(gameLoop);
    draw();
}

// Initial draw
draw();
