const pickOptions = ["Rock", "Paper", "Scissors"];
function options() {
  return Math.floor(Math.random() * pickOptions.length);
}
const randomElement = pickOptions[options()];

const playerChoice = document.getElementById("player-choice");

const checkbtn = document.getElementById("checkbtn");

const winner = document.getElementById("winner");

checkbtn.addEventListener("click", () => {
  checkPlayerOptions();
});

function resetGame() {
  winner.innerHTML = "";
  playerChoice.selectedIndex = 0;
}

function checkPlayerOptions() {
  let selectedChoice = playerChoice.value;
  let result =
    selectedChoice === randomElement.toLowerCase()
      ? "Tie"
      : selectedChoice === "rock" && randomElement === "Paper"
      ? "Computer Wins"
      : selectedChoice === "paper" && randomElement === "Scissors"
      ? "Computer Wins"
      : selectedChoice === "scissors" && randomElement === "Rock"
      ? "Computer Wins"
      : "Player Wins";

  winner.innerHTML = `${result}`;

  setTimeout(() => {
    resetGame();
  }, 1000);
}
