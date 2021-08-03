const bird = document.querySelector(".bird");
const gameDisplay = document.querySelector(".game-container");
const ground = document.querySelector(".ground");

let birdLeft = 220;
let birdbottom = 100;
let gravity = 2;
let isGameOver = false;
let gap = 430

function startGame() {
  birdbottom -= gravity;
  bird.style.bottom = birdbottom + "px";
  bird.style.left = birdLeft + "px";
}
let gameTimerId = setInterval(startGame, 20);

function control(e) {
  if (e.keyCode === 32) {
    jump();
  }
}

function jump() {
  if (birdbottom < 500) birdbottom += 50;
  bird.style.bottom = birdbottom + "px";
  console.log(birdbottom);
}
document.addEventListener("keyup", control);

function generateObstacle() {
  let obstacleLeft = 500;
  let randomHeight = Math.random() * 60;
  let obstacleBottom = randomHeight;
  const obstacle = document.createElement("div");
  const topObstacle = document.createElement("div");
  if (!isGameOver) {
    obstacle.classList.add("obstacle");
    topObstacle.classList.add("topObstacle");

  }
  gameDisplay.appendChild(obstacle);
  gameDisplay.appendChild(topObstacle);
  obstacle.style.left = obstacleLeft + "px";
  topObstacle.style.left = obstacleLeft + "px"
  obstacle.style.bottom = obstacleBottom + "px";
  topObstacle.style.bottom = obstacleBottom + gap + "px"

  function moveobstacle() {
    obstacleLeft -= 2;
    obstacle.style.left = obstacleLeft + "px";
    topObstacle.style.left  = obstacleLeft + "px";
    if (obstacleLeft === -60) {
      clearInterval(timerId);
      gameDisplay.removeChild(obstacle);
      gameDisplay.removeChild(topObstacle);
    }
    if 
      (obstacleLeft > 200 &&
        obstacleLeft < 280 &&
        birdLeft === 220 &&
       (birdbottom < obstacleBottom + 153 || birdbottom > obstacleBottom + gap -200)||
      birdbottom === 0
    ) {
      gameOver();
      clearInterval(timerId);
    }
  }
  let timerId = setInterval(moveobstacle, 20);
  if (!isGameOver) setTimeout(generateObstacle, 3000);
}
generateObstacle();

function gameOver() {
  clearInterval(gameTimerId);
  console.log("game over");
  isGameOver = true;
  document.removeEventListener("keyup", control);
}
