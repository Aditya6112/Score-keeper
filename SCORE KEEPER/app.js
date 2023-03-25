const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const player1display = document.querySelector("#player1display");
const player2display = document.querySelector("#player2display");
const resetbutton = document.querySelector("#reset");
const players = document.querySelector("#players");

let p1score = 0;
let p2score = 0;
let winningscore = 3;
let isgameover = false;

p1button.addEventListener("click", function () {
  if (!isgameover) {
    p1score += 1;
    if (p1score === winningscore) {
      isgameover = true;
      player1display.classList.add("winner");
      player2display.classList.add("loser");
    }
    player1display.textContent = p1score;
  }
});

p2button.addEventListener("click", function () {
  if (!isgameover) {
    p2score += 1;
    if (p2score === winningscore) {
      isgameover = true;
      player2display.classList.add("winner");
      player1display.classList.add("loser");

    }
    player2display.textContent = p2score;
  }
});

players.addEventListener("change", function () {
  winningscore = parseInt(this.value);
  resetscore();
});

resetbutton.addEventListener("click", resetscore);

//function to reset the game.......
function resetscore() {
  isgameover = false;
  p1score = 0;
  p2score = 0;
  player1display.textContent = 0;
  player2display.textContent = 0;
  player1display.classList.remove("winner","loser");
  player2display.classList.remove("winner","loser");
  //alert("Game Restarted!!!!!");
}
