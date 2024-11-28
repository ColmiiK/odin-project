function getComputerChoice() {
  const rng = Math.floor(Math.random() * 3);
  if (rng === 1) {
    return "ROCK";
  } else if (rng === 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function playRound(humanChoice) {
  humanChoice = humanChoice.toUpperCase();
  var computerChoice = getComputerChoice();
  if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    console.log("You win!", humanChoice, " beats ", computerChoice);
    humanScore++;
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    console.log("You win!", humanChoice, " beats ", computerChoice);
    humanScore++;
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    console.log("You win!", humanChoice, " beats ", computerChoice);
    humanScore++;
  } else if (humanChoice === computerChoice) {
    console.log("Tie!", humanChoice, " against ", computerChoice);
  } else {
    console.log("You lose!", humanChoice, " doesn't beat ", computerChoice);
    computerScore++;
  }
}

let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultDiv = document.querySelector("#resultDiv");
const result = document.querySelector("#results");

function updateScore() {
  result.textContent = " " + humanScore + " - " + computerScore;
  if (humanScore === 5) {
    alert("Congratulations! You won!");
  }
  if (computerScore === 5) {
    alert("You lost, better luck next time!");
  }
}

rock.addEventListener("click", () => {
  playRound("ROCK");
  updateScore();
});

paper.addEventListener("click", () => {
  playRound("PAPER");
  updateScore();
});
scissors.addEventListener("click", () => {
  playRound("SCISSORS");
  updateScore();
});
