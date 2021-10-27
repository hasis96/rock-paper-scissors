const myArray = ["rock", "paper", "scissors"];

function computerPlay() {
   return myArray[Math.floor(Math.random() * myArray.length)];
}
const computerSelection = computerPlay();

const playerWins = "Player Wins!";
const playerLoses = "Player Loses!";
const playerTies = "It's a tie! Play again!";
const invalidAnswer = "Please type your answer again";



function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
       return playerWins;
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
       return playerLoses;
    }
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        return playerTies;
    }

    if (playerSelection == "rock" && computerSelection == "rock") {
        return playerTies;
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        return playerWins;
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        return playerLoses;
    }
 
    if (playerSelection == "rock" && computerSelection == "paper") {
        return playerLoses;
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        return playerTies;
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        return playerWins;
    }

    if (playerSelection != "rock" | "paper" | "scissors") {
        return invalidAnswer;
    }
}

function game() {
    let playerSelection = prompt("rock, paper, or scissors?");
        playerSelection = playerSelection.toLowerCase(); 

    console.log(playRound(playerSelection, computerSelection));
}

game();