document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird') as HTMLElement;
  const gameDisplay = document.querySelector('.game-container');
  const ground = document.querySelector('.ground');

  let birdLeft: number = 220;
  let birdBottom: number = 100;

  function startGame() {
    bird.style.bottom = birdBottom + 'px';
  }

  startGame();
});
