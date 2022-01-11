const myArray = ["rock", "paper", "scissors"];
const playerWins = "Player Wins!";
const playerLoses = "Player Loses!";
const playerTies = "It's a tie! Play again!";
const gameOver = "Game Over!";
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
const buttons = document.querySelectorAll('button');

function computerPlay()  {
    return myArray[Math.floor(Math.random() * myArray.length)];
 }


 buttons.forEach((button) => {
    button.addEventListener('click', () => {
    playerSelection = button.id;
    playRound(playerSelection, computerSelection);
    });
});
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
    playerScore = ++playerScore;

    const container = document.querySelector('#container');

    const playerContent = document.createElement('div')
    playerContent.classList.add('playerContent');
    playerContent.textContent = "YOU: " + playerScore + " " + playerWins;

    const computerContent = document.createElement('div');
    computerContent.classList.add('computerContent');
    computerContent.textContent = "CPU: " + computerScore + " " + playerLoses;


    container.appendChild(playerContent);
    container.appendChild(computerContent);    
    } else if ((playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore = ++computerScore;
        console.log(playerLoses);
    } else if (playerSelection === computerSelection) {
        console.log(playerTies);

        const containerTie = document.querySelector('#container');

        const playerTie = document.createElement('div');
        playerTie.classList.add('playerTie');
        playerTie.textContent = playerTies;

        containerTie.appendChild(playerTie);

    }
}