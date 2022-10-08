
function id(id) {
    return document.getElementById(id);
}

let playerChoice = "";
let computerChoice = "";

let playerScore = 0;
let computerScore = 0;

/*----------------------Populating Player Choice Image */

id("rock-box").addEventListener("click", () => {
    id("player-choice").innerHTML = '<span class="pic-choice"><i class="fa-regular fa-hand-back-fist"></i></span>'
    playerChoice = "rock";
    createComputerChoice();
});

id("paper-box").addEventListener("click", () => {
    id("player-choice").innerHTML = '<span class="pic-choice"><i class="fa-regular fa-hand"></i></span>'
    playerChoice = "paper";
    createComputerChoice();
  });

id("scissors-box").addEventListener("click", () => {
    id("player-choice").innerHTML = '<span class="pic-choice"><i class="fa-regular fa-hand-scissors"></i></span>'
    playerChoice = "scissors";
    createComputerChoice();
});

/*----------------------Populating Computer Choice Image */

const choices = ["rock", "paper", "scissors"];

function createComputerChoice() {
    let result = choices[Math.floor(Math.random() * 3)];
    computerChoice = result;

    if (playerChoice != "") {
        if (computerChoice === "rock") {
            id("computer-choice").innerHTML = '<span class="pic-choice"><i class="fa-regular fa-hand-back-fist"></i></span>';
        } else if (computerChoice === "paper") {
            id("computer-choice").innerHTML = '<span class="pic-choice"><i class="fa-regular fa-hand"></i></span>'
        } else {
            id("player-choice").innerHTML = '<span class="pic-choice"><i class="fa-regular fa-hand-scissors"></i></span>'
        }
    }
};

/*let computerChoice = choices[createComputerChoice()];

function createComputerChoice() {
    let result = Math.floor(Math.random() * 3) + 1;
    return result
}

if (playerChoice != "") {
    if (computerChoice === "rock") {
        id("computer-choice").innerHTML = '<span class="pic-choice"><i class="fa-regular fa-hand-back-fist"></i></span>';
    } else if (computerChoice === "paper") {
        id("computer-choice").innerHTML = '<span class="pic-choice"><i class="fa-regular fa-hand"></i></span>'
    } else {
        id("player-choice").innerHTML = '<span class="pic-choice"><i class="fa-regular fa-hand-scissors"></i></span>'
    }
}*/

/*----------------------Incrementing Scores */

