"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var bird = document.querySelector('.bird');
    var gameDisplay = document.querySelector('.game-container');
    var ground = document.querySelector('.ground');
    var birdLeft = 220;
    var birdBottom = 100;
    function startGame() {
        bird.style.bottom = birdBottom + 'px';
    }
    startGame();
});
