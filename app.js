"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var bird = document.querySelector('.bird');
    var gameDisplay = document.querySelector('.game-container');
    var ground = document.querySelector('.ground');
    var birdLeft = 220;
    var birdBottom = 100;
    var gravity = 3;
    var isGameOver = false;
    var gap = 430;
    function startGame() {
        birdBottom -= gravity;
        bird.style.bottom = birdBottom + "px";
        bird.style.left = birdLeft + "px";
    }
    var gameTimerId = setInterval(startGame, 20);
    function control(event) {
        if (event.keyCode === 32) {
            jump();
        }
    }
    function jump() {
        if (birdBottom < 495)
            birdBottom += 50;
        bird.style.bottom = birdBottom + "px";
    }
    document.addEventListener('keyup', control);
    function generateObstacle() {
        var obstacleLeft = 500;
        var randomHeight = Math.random() * 110;
        var obstacleBottom = randomHeight;
        var obstacle = document.createElement('div');
        var topObstacle = document.createElement('div');
        if (!isGameOver) {
            obstacle.classList.add('obstacle');
            topObstacle.classList.add('topObstacle');
        }
        gameDisplay.appendChild(obstacle);
        gameDisplay.appendChild(topObstacle);
        obstacle.style.left = obstacleLeft + 'px';
        topObstacle.style.left = obstacleLeft + 'px';
        obstacle.style.bottom = obstacleBottom + 'px';
        topObstacle.style.bottom = obstacleBottom + gap + 'px';
        function moveObstacle() {
            obstacleLeft -= 2;
            obstacle.style.left = obstacleLeft + 'px';
            topObstacle.style.left = obstacleLeft + 'px';
            if (obstacleLeft === -60) {
                clearInterval(timerId);
                gameDisplay.removeChild(obstacle);
                gameDisplay.removeChild(topObstacle);
            }
            if ((obstacleLeft > 200 &&
                obstacleLeft < 280 &&
                birdLeft === 220 &&
                (birdBottom < obstacleBottom + 153 ||
                    birdBottom > obstacleBottom + gap - 200)) ||
                birdBottom === 0) {
                gameOver();
                clearInterval(timerId);
            }
        }
        var timerId = setInterval(moveObstacle, 20);
        if (!isGameOver)
            setTimeout(generateObstacle, 3000);
    }
    generateObstacle();
    function gameOver() {
        clearInterval(gameTimerId);
        console.log('GAME OVER');
        isGameOver = true;
        document.removeEventListener('keyup', control);
    }
});
