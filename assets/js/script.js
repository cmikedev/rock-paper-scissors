
const choices = ["rock", "paper", "scissors"]

let computerChoice = choices[createComputerChoice()];



function createComputerChoice() {
    let result = Math.floor(Math.random() * 3) + 1;
    return result
}