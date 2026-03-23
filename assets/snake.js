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
        scoreElement.textContent = score;
        generateFood();
    } else {
        snake.pop();
    }

    draw();
}

function draw() {
    // Clear canvas — deep space black
    ctx.fillStyle = '#080810';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid — faint holographic grid lines
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.06)';
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

    // Draw snake — neon cyan with glow
    snake.forEach((segment, index) => {
        if (index === 0) {
            // Head — bright cyan with strong glow
            ctx.fillStyle = '#00f0ff';
            ctx.shadowBlur = 12;
            ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
        } else {
            // Body — dimmer cyan, pulsing subtly
            const fade = Math.max(0.3, 1 - (index / snake.length) * 0.7);
            const r = 0;
            const g = Math.round(200 * fade);
            const b = Math.round(220 * fade);
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.shadowBlur = 6;
            ctx.shadowColor = `rgba(0, 200, 255, ${0.4 * fade})`;
        }

        ctx.fillRect(
            segment.x * gridSize + 1,
            segment.y * gridSize + 1,
            gridSize - 2,
            gridSize - 2
        );

        ctx.shadowBlur = 0;
    });

    // Draw food — pulsing red-orange target
    const pulse = 0.7 + 0.3 * Math.sin(Date.now() / 200);
    ctx.fillStyle = '#ff3344';
    ctx.shadowBlur = 10 * pulse;
    ctx.shadowColor = 'rgba(255, 51, 68, 0.7)';
    ctx.fillRect(
        food.x * gridSize + 3,
        food.y * gridSize + 3,
        gridSize - 6,
        gridSize - 6
    );
    ctx.shadowBlur = 0;
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
    scoreElement.textContent = score;
    gameOverElement.style.display = 'none';
    gameRunning = false;
    isGameOver = false;
    clearInterval(gameLoop);
    draw();
}

// Initial draw
draw();
