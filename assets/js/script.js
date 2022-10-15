
function id(id) {
    return document.getElementById(id);
};

let rockPic = '<span class="js-pic-choice"><i class="fa-regular fa-hand-back-fist"></i></span>';
let paperPic = '<span class="js-pic-choice"><i class="fa-regular fa-hand"></i></span>';
let scissorsPic = '<span class="js-pic-choice"><i class="fa-regular fa-hand-scissors"></i></span>';

let playerChoice = "";
let computerChoice = "";

let playerScore = 0;
let computerScore = 0;

window.onload = updateScores();

/*----------------------Populating Player Choice Image */

id("rock-box").addEventListener("click", () => {
    id("player-choice").innerHTML = rockPic;
    playerChoice = "rock";
    createComputerChoice();
    calcScores(playerChoice, computerChoice);
    updateScores();
    endGame();
});

id("paper-box").addEventListener("click", () => {
    id("player-choice").innerHTML = paperPic;
    playerChoice = "paper";
    createComputerChoice();
    calcScores(playerChoice, computerChoice);
    updateScores();
    endGame();
  });

id("scissors-box").addEventListener("click", () => {
    id("player-choice").innerHTML = scissorsPic;
    playerChoice = "scissors";
    createComputerChoice();
    calcScores(playerChoice, computerChoice);
    updateScores();
    endGame();
});

/*----------------------Populating Computer Choice Image & Calculating Scores */

const choices = ["rock", "paper", "scissors"];

function createComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * 3)];
    if (playerChoice != "") {
        if (computerChoice === "rock") {
            id("computer-choice").innerHTML = rockPic;
        } else if (computerChoice === "paper") {
            id("computer-choice").innerHTML = paperPic;
        } else {
            id("computer-choice").innerHTML = scissorsPic;
        }
    }
};

/*----------------------Incrementing the Scores */

function calcScores(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        playerScore += 0;
        computerScore += 0;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore ++;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore ++;
    }   else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore ++;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore ++;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore ++;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore ++;
    };
};

/*----------------------Displaying the Scores */

function updateScores() {
    id("player-score").innerHTML = '<span class="js-scores">' + playerScore; + '</span>';
    id("computer-score").innerHTML = '<span class="js-scores">' + computerScore; + '</span>';
};

/*----------------------Clearing the Game */

function clearGame() {
    playerChoice = "";
    computerChoice = "";
    playerScore = 0;
    computerScore = 0;
};

/*----------------------Win/Lose Game */

function endGame() {
    if (playerScore === 3) {
        id("player-choice").innerHTML = '<span class="js-end-game">You Win!</span>';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 3) {
        id("player-choice").innerHTML = '<span class="js-end-game">You Lose!</span>';
        playerScore = 0;
        computerScore = 0;
    };
};