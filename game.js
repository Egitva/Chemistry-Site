const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const cubeSize = 40;
const boxes = [];
const walls = []; 
let score = 0;
const boxCount = 5;
const wallCount = 5;
let cubeX = 0;
let cubeY = 0;

const scoreDisplay = document.createElement('div');
scoreDisplay.style.position = 'absolute';
scoreDisplay.style.top = '10px';
scoreDisplay.style.left = '10px';
scoreDisplay.style.fontSize = '20px';
document.body.appendChild(scoreDisplay);

function spawnBoxes() {
    for (let i = 0; i < boxCount; i++) {
        const boxX = Math.floor(Math.random() * (canvas.width / cubeSize)) * cubeSize;
        const boxY = Math.floor(Math.random() * (canvas.height / cubeSize)) * cubeSize;
        boxes.push({ x: boxX, y: boxY });
    }
}

function spawnWalls() {
    for (let i = 0; i < wallCount; i++) {
        const boxX = Math.floor(Math.random() * (canvas.width / cubeSize)) * cubeSize;
        const boxY = Math.floor(Math.random() * (canvas.height / cubeSize)) * cubeSize;
        walls.push({ x: boxX, y: boxY });
    }
}

function drawBoxes() {
    ctx.fillStyle = 'blue';
    boxes.forEach(box => {
        ctx.fillRect(box.x, box.y, cubeSize, cubeSize);
    });
}

function drawWalls() {
    ctx.fillStyle = 'black';
    walls.forEach(wall => {
        ctx.fillRect(wall.x, wall.y, cubeSize, cubeSize);
    });
}

function drawCube() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWalls(); 
    drawBoxes();
    ctx.fillStyle = 'red';
    ctx.fillRect(cubeX, cubeY, cubeSize, cubeSize);
    scoreDisplay.innerText = `Score: ${score}`;
}

function isTouching(box) {
    return (
        cubeX < box.x + cubeSize &&
        cubeX + cubeSize > box.x &&
        cubeY < box.y + cubeSize &&
        cubeY + cubeSize > box.y
    );
}

function isCollidingWithWall() {
    return walls.some(wall => (
        cubeX < wall.x + cubeSize &&
        cubeX + cubeSize > wall.x &&
        cubeY < wall.y + cubeSize &&
        cubeY + cubeSize > wall.y
    ));
}

function moveCube(event) {
    boxes.forEach((box, index) => {
        if (isTouching(box)) {
            score++;
            boxes.splice(index, 1); 
        }
    });

    if (score === boxCount) {
        window.location.reload();
    }

    const previousX = cubeX;
    const previousY = cubeY;

    switch (event.key) {
        case 'ArrowUp':
            if (cubeY - cubeSize >= 0) cubeY -= cubeSize;
            break;
        case 'ArrowDown':
            if (cubeY + cubeSize < canvas.height) cubeY += cubeSize;
            break;
        case 'ArrowLeft':
            if (cubeX - cubeSize >= 0) cubeX -= cubeSize;
            break;
        case 'ArrowRight':
            if (cubeX + cubeSize < canvas.width) cubeX += cubeSize;
            break;
    }


    if (isCollidingWithWall()) {
        cubeX = previousX; 
        cubeY = previousY; 
    }

    drawCube();
}

document.addEventListener('keydown', moveCube);
spawnBoxes();
spawnWalls(); 
drawCube();
