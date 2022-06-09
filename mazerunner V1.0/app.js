let canvas = document.createElement("canvas");
document.body.appendChild(canvas);

//Game Area//
const pixelWidth = 30;
const xPixelNumber = 25;
const yPixelNumber = 20;
canvas.width = xPixelNumber * pixelWidth;
canvas.height = yPixelNumber * pixelWidth;
canvas.style.backgroundColor = "";
canvas.style.border = "2px solid black";
let line = canvas.getContext("2d");
let ctx = canvas.getContext("2d");

// Mazerunner-man//

var pacman = new Image();
pacman.src = "image/player_down.png";

//Mazerunner-man Position

let pacmanXcoordinates = 30;
let pacmanYcoordinates = 30;
let pacmanXposition = 1;
let pacmanYposition = 1;

//deneme

const pacmanPosition = {
    xCor: 30,
    yCor: 30,
    x: 1,
    y: 1,
};

//Move mazerunner-man

let key;
let pressKey = addEventListener("keydown", function(e) {
    key = e.keyCode;
});

var keylock = false;

function movePacman() {
    //38 → Up
    if (
        key == 38 &&
        maze[pacmanYposition - 1][pacmanXposition] !== 1 &&
        keylock == false
    ) {
        pacmanYcoordinates -= pixelWidth;
        pacmanYposition -= 1;
        key = null;
        pacman.src = "image/player_up.png";
    }
    //40 → Down
    if (
        key == 40 &&
        maze[pacmanYposition + 1][pacmanXposition] !== 1 &&
        keylock == false
    ) {
        pacmanYcoordinates += pixelWidth;
        pacmanYposition += 1;
        key = null;
        pacman.src = "image/player_down.png";
    }

    //39 → Right
    if (
        key == 39 &&
        maze[pacmanYposition][pacmanXposition + 1] !== 1 &&
        keylock == false
    ) {
        pacmanXcoordinates += pixelWidth;
        pacmanXposition += 1;
        key = null;
        pacman.src = "image/player_right.png";
    }

    //37 → Left
    if (
        key == 37 &&
        maze[pacmanYposition][pacmanXposition - 1] !== 1 &&
        keylock == false
    ) {
        pacmanXcoordinates -= pixelWidth;
        pacmanXposition -= 1;
        key = null;
        pacman.src = "image/player_left.png";
    }
}

/*
0 → free path/diamond
1→ barrier
2 → mazerunner-man

*/
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const barrier = canvas.getContext("2d");
barrier.width = pixelWidth;
barrier.height = pixelWidth;
barrier.fillStyle = "cyan";

function createMaze() {
    for (let x = 0; x < yPixelNumber; x++) {
        for (let y = 0; y < xPixelNumber; y++) {
            if (maze[x][y] === 1) {
                barrier.fillRect(
                    pixelWidth * y,
                    pixelWidth * x,
                    pixelWidth,
                    pixelWidth
                );
            }
        }
    }
}

function createMaze() {
    for (let x = 0; x < yPixelNumber; x++) {
        for (let y = 0; y < xPixelNumber; y++) {
            if (maze[x][y] === 1) {
                ctx.drawImage(stone, pixelWidth * y, pixelWidth * x);
            }
        }
    }
}

function createFood() {
    for (let x = 0; x < yPixelNumber; x++) {
        for (let y = 0; y < xPixelNumber; y++) {
            if (maze[x][y] === 0) {
                ctx.drawImage(food, pixelWidth * y, pixelWidth * x);
            }
        }
    }
}

var score = -10;
var goalscore = 100;
var level;
var time = 10;

function eat() {
    for (let x = 0; x < yPixelNumber; x++) {
        for (let y = 0; y < xPixelNumber; y++) {
            if (maze[x][y] === 0 && y == pacmanXposition && x == pacmanYposition) {
                maze[x][y] = 2;
                score += 10;
            }
        }
    }
}

function counttime() {
    if (time != 0 && goalscore != score) {
        time -= 1;
    }
}

setInterval(counttime, 1000);

var food = new Image();
food.src = "image/diamond.png";

var stone = new Image();
stone.src = "image/stone.png";

function startGame() {
    document.getElementById("btn-start").addEventListener("click", function() {
        doeverythink();
        time = 20;
        level = 1;
        document.getElementById("btn-start").classList.add("hidden");
    });
}

function gameOver() {
    if (score <= goalscore && time == 0) {
        document.getElementById("game-over").style.visibility = "visible";

        keylock = true;
    }
}

var gameo = document.getElementById("game-over");
gameo.addEventListener("click", function() {
    location.reload();

    keylock = false;
    document.getElementById("game-over").style.visibility = "hidden";
});

function gamewin() {
    if (score >= goalscore && time > 0 && time < 60) {
        document.getElementById("game-win").style.visibility = "visible";

        keylock = true;
    }
}

document.getElementById("game-win").addEventListener("click", function() {
    for (let x = 0; x < yPixelNumber; x++) {
        for (let y = 0; y < xPixelNumber; y++) {
            if (maze[x][y] === 2) {
                maze[x][y] = 0;
            }
        }
    }

    keylock = false;

    level += 1;
    goalscore += 100;
    score = -10;
    time = 20;

    if (level == 2) {
        pacmanXcoordinates = 150;
        pacmanYcoordinates = 360;
        pacmanXposition = 5;
        pacmanYposition = 12;
    } else if (level == 3) {
        pacmanXcoordinates = 450;
        pacmanYcoordinates = 240;
        pacmanXposition = 15;
        pacmanYposition = 8;
    } else if (level == 4) {
        pacmanXcoordinates = 630;
        pacmanYcoordinates = 540;
        pacmanXposition = 21;
        pacmanYposition = 18;
    } else {
        pacmanXcoordinates = 30;
        pacmanYcoordinates = 30;
        pacmanXposition = 1;
        pacmanYposition = 1;
    }

    document.getElementById("game-win").style.visibility = "hidden";
});

let doeverythink = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    movePacman();
    createMaze();
    createFood();
    eat();

    ctx.drawImage(pacman, pacmanXcoordinates, pacmanYcoordinates);

    document.getElementById("score").innerText = score;
    gamewin();
    document.getElementById("level").innerText = level;
    document.getElementById("time").innerText = time;
    gameOver();

    document.getElementById("score-goal").innerText = goalscore;
    requestAnimationFrame(doeverythink);
};

createMaze();
startGame();
gameOver();
eat();
createFood();
gamewin();