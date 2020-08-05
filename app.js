"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var bird = document.querySelector('.bird');
    var gameDisplay = document.querySelector('.game-container');
    var ground = document.querySelector('.ground');
    var birdLeft = 220;
    var birdBottom = 100;
    var gravity = 2;
    function startGame() {
        birdBottom -= gravity;
        bird.style.bottom = birdBottom + "px";
        bird.style.left = birdLeft + "px";
    }
    var timerId = setInterval(startGame, 20);
    function jump() {
        if (birdBottom < 495)
            birdBottom += 50;
        bird.style.bottom = birdBottom + "px";
    }
    document.addEventListener('keyup', function (event) {
        if (event.code === 'Space') {
            jump();
        }
    });
});
