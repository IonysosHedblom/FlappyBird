document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird') as HTMLElement;
  const gameDisplay = document.querySelector('.game-container');
  const ground = document.querySelector('.ground');

  let birdLeft: number = 220;
  let birdBottom: number = 100;
  let gravity: number = 2;

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = `${birdBottom}px`;
    bird.style.left = `${birdLeft}px`;
  }

  let timerId = setInterval(startGame, 20);

  function jump() {
    if (birdBottom < 495) birdBottom += 50;
    bird.style.bottom = `${birdBottom}px`;
  }
  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      jump();
    }
  });
});
