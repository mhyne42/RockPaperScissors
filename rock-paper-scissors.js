const prompt = require("prompt-sync")();

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    number = Math.random()

    if (number > 0 && number < 0.33) {
        return "rock";
    } else if (number > 0.33 && number < 0.66) {
        return "scissors";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    return prompt("Rock, paper or scissors? ");
}

function PlayRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        console.log("You win!");
        humanScore++;
    } else if ((humanChoice == "scissors" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors")) {
        console.log("You lost!");
        computerScore++;
    } else if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    }
}

function playGame(PlayRound) {
    for (let i = 0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        PlayRound(humanSelection, computerSelection);
        console.log(computerSelection)
    }
    console.log("Your score: " + humanScore);
    console.log("Score of computer: " + computerScore);
    console.log("Number of ties: " + (5 - (computerScore + humanScore)))
} 

playGame(PlayRound);