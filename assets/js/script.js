

function id(id) {
    return document.getElementById(id);
}

/*----------------------Populating Player Choice Image */

let playerChoice = "";

id("rock-box").addEventListener("click", () => {
    id("player-choice").innerHTML = '<span class="pic-choice"><i class="fa-regular fa-hand-back-fist"></i></span>'
    playerChoice = "rock"
});

id("paper-box").addEventListener("click", () => {
    id("player-choice").innerHTML = '<span class="pic-choice"><i class="fa-regular fa-hand"></i></span>'
    playerChoice = "paper"
  });

id("scissors-box").addEventListener("click", () => {
    id("player-choice").innerHTML = '<span class="pic-choice"><i class="fa-regular fa-hand-scissors"></i></span>'

    playerChoice = "scissors"
});

/*----------------------Populating Computer Choice Image */

const choices = ["rock", "paper", "scissors"];

let computerChoice = choices[createComputerChoice()];

function createComputerChoice() {
    let result = Math.floor(Math.random() * 3) + 1;
    return result
}

