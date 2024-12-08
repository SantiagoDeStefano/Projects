const choices = ["Rock", "Paper", "Scissors"];
const computerDisplay = document.getElementById("computerDisplay");
const playerDisplay = document.getElementById("playerDisplay");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let computerScore = 0;
let playerScore = 0;

function playGame(playerChoice) {
    randomIndex = Math.floor(Math.random()*3);
    computerChoice = choices[randomIndex];
    let result = "";

    if(playerChoice === computerChoice) {
        result = "It's a tie!";
    }
    else {
        switch(playerChoice) {
            case "Rock":
                result = (computerChoice === "Scissors") ? "You win!" : "You lose!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "You win!" : "You lose!";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "You win!" : "You lose!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");
    
    switch(result) {
        case "You win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore
            break;
        case "You lose!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}