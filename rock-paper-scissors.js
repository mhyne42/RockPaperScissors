let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    const number = Math.random();

    if (number < 0.33) {
        return "rock";
    } else if (number < 0.66) {
        return "scissors";
    } else {
        return "paper";
    }
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore++;
        return "You win!";
    } else if ((humanChoice == "scissors" && computerChoice == "rock") ||
               (humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors")) {
        computerScore++;
        return "You lost!";
    } else if (humanChoice == computerChoice) {
        return "It's a tie";
    }
}

function updateDOM(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    // Update round result
    document.getElementById("round-result").textContent = 
        `You chose ${humanChoice}, Computer chose ${computerChoice}. ${result}`;

    // Update scores
    document.getElementById("scores").textContent = 
        `Human: ${humanScore} | Computer: ${computerScore}`;
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => updateDOM("rock"));
document.getElementById("paper").addEventListener("click", () => updateDOM("paper"));
document.getElementById("scissors").addEventListener("click", () => updateDOM("scissors"));

/*
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

*/