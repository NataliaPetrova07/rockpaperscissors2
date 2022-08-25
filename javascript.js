start();

function start() {
  console.log("start");
  getUserSelection();
}

let player, computer;

// let rock;
// let scissors;
// let paper;

function getUserSelection() {
  document.querySelector(".rock").addEventListener("click", assignRock);
  document.querySelector(".paper").addEventListener("click", assignPaper);
  document.querySelector(".scissors").addEventListener("click", assignScissors);
}

function assignRock() {
  player = "rock";
  console.log(player);
  makeRandomComputerChoice();
  document.querySelector("#player1").addEventListener("animationend", showResult);
}

function assignPaper() {
  player = "paper";
  console.log(player);
  makeRandomComputerChoice();
  document.querySelector("#player1").addEventListener("animationend", showResult);
}

function assignScissors() {
  player = "scissors";
  console.log(player);
  makeRandomComputerChoice();
  document.querySelector("#player1").addEventListener("animationend", showResult);
}

function makeRandomComputerChoice() {
  var choice = Math.random();
  if (choice <= 0.34) {
    computer = "rock";
    document.querySelector("#player2").addEventListener("animationend", showResultcomp);
  } else if (choice <= 0.67) {
    computer = "scissors";
    document.querySelector("#player2").addEventListener("animationend", showResultcomp);
  } else {
    computer = "paper";
    document.querySelector("#player2").addEventListener("animationend", showResultcomp);
  }
  console.log(computer);
  showAnimations();
}

function showAnimations() {
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  determineWinner();
}

function showResult() {
  console.log("showResult");
  document.querySelector("#player1").classList.value = "";
  document.querySelector("#player1").removeEventListener("animationend", showResult);
  document.querySelector("html").offsetHeight;
  document.querySelector("#player1").classList.add("player");
  document.querySelector("#player1").classList.add(player);
}
function showResultcomp() {
  console.log("showResultcomp");
  document.querySelector("#player2").classList.value = "";
  document.querySelector("#player2").removeEventListener("animationend", showResultcomp);
  document.querySelector("html").offsetHeight;
  document.querySelector("#player2").classList.add("player");
  document.querySelector("#player2").classList.add(computer);
}
let winner = "";

function determineWinner() {
  if (player === computer) {
    setTimeout(showDraw, 2000);
  } else if (player == "rock") {
    document.querySelector("#player1").classList.add("rock");
    if (computer == "paper") {
      setTimeout(showLose, 2000);
    } else {
      setTimeout(showWin, 2000);
    }
  } else if (player == "scissors") {
    document.querySelector("#player1").classList.add("scissors");
    if (computer == "rock") {
      setTimeout(showLose, 2000);
    } else {
      setTimeout(showWin, 2000);
    }
  } else if (player == "paper") {
    document.querySelector("#player1").classList.add("paper");
    if (computer == "scissors") {
      setTimeout(showLose, 2000);
    } else {
      setTimeout(showWin, 2000);
    }
  }
}

function showWin() {
  console.log("Show win!");
  document.querySelector("#win").classList.remove("hidden");
}

function showLose() {
  console.log("Show lose!");
  document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
  console.log("Show draw!");
  document.querySelector("#draw").classList.remove("hidden");
}
