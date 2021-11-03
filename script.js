const myArray = ["rock", "paper", "scissors"];
const playerWins = "Player Wins!";
const playerLoses = "Player Loses!";
const playerTies = "It's a tie! Play again!";
const invalidAnswer = "Please type your answer again";
const gameOver = "Game Over!";
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
 }
 
 function playRound(playerSelecetion, computerSelection) {
    if ((playerSelecetion == "rock" && computerSelection == "scissors") ||
        (playerSelecetion == "paper" && computerSelection == "rock") ||
        (playerSelecetion == "scissors" && computerSelection == "paper")) {
    return playerWins;
    } else if ((playerSelecetion == "rock" && computerSelection == "paper") ||
            (playerSelecetion == "paper" && computerSelection == "scissors") ||
            (playerSelecetion == "scissors" && computerSelection == "rock")) {
        return playerLoses;
    } else if (playerSelecetion === computerSelection) {
        return playerTies;
    } else {
        return invalidAnswer;
    }
}

function game() {
    let computerSelection = computerPlay();
    let promptInput = prompt("rock, paper, or scissors?");
    let playerSelection = promptInput.toLowerCase();
    let roundResult = playRound(playerSelection, computerSelection);
    
    if (roundResult === playerWins) {
        playerScore++;
    } else if (roundResult === playerLoses) {
        computerScore++;
    } 
      
    let userTally = "You:" + " " + playerScore;
    let computerTally = "CPU:" + " " + computerScore;
    console.log(playRound(playerSelection, computerSelection));
    console.log(userTally);
    console.log(computerTally);
    
}

while (playerScore < 5 && computerScore < 5) {
    game();
}
