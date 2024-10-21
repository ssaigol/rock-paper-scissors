// Global variables
var humanScoreTotal = 0;
var computerScoreTotal  = 0;

//Display messages
const choose = "Choose your move"
const winRound = "You win this round!"
const loseRound = "You lose this round."
const tieRound = "Tie round."
const winGame = "You win the game! Congratulations!"
const loseGame = "Computer wins the game. Better luck next time."

//Start Game
var start = document.getElementById("start-game");
var display = document.getElementById("game-status");
var humanScore = document.querySelector("#player-tally");
var computerScore = document.querySelector("#computer-tally");

start.addEventListener('click', startGame);
function startGame () {
    display.textContent = choose;
    humanScoreTotal = 0;
    computerScoreTotal = 0;
    start.textContent = "Restart";
    updateScore();
};

function updateScore () {
    humanScore.textContent = humanScoreTotal;
    computerScore.textContent = computerScoreTotal;
}

//Player chooses a move
const rockButton = document.getElementById("rock");
rockButton.addEventListener('click', playRound);
const paperButton = document.getElementById("paper");
paperButton.addEventListener('click', playRound);
const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener('click', playRound);


function playRound (event) {
    var humanChoice = event.target.textContent;
    var computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        display.textContent = tieRound + "Go again.";
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        display.textContent = `${computerChoice} beats ${humanChoice}. ` + loseRound;
        computerScoreTotal++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        display.textContent = `${humanChoice} beats ${computerChoice}. ` + winRound;
        humanScoreTotal++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        display.textContent = `${humanChoice} beats ${computerChoice}. ` + winRound;
        humanScoreTotal++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        display.textContent = `${computerChoice} beats ${humanChoice}. ` + loseRound;
        computerScoreTotal++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        display.textContent = `${computerChoice} beats ${humanChoice}. ` + loseRound;
        computerScoreTotal++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        display.textContent = `${humanChoice} beats ${computerChoice}. ` + winRound;
        humanScoreTotal++;
    }
    updateScore();
    if (humanScoreTotal === 5) {
        start.style.display = "unset";
        start.textContent = "Play again";
        display.textContent = winGame;
    }
    if (computerScoreTotal === 5) {
        start.style.display = "unset";
        start.textContent = "Play again";
        display.textContent = loseGame;
    }

    // console.log(humanChoice);
    // console.log(computerChoice);
}




//Computer chooses a move
function getComputerChoice () {
    let a = Math.random();
    if (a < 0.34) {
        return "Rock";
    } else if (a >= 0.67) {
        return "Paper";
    } else {return "Scissors"}
}

// function playGame (rounds) {
//     for (let i = 0; i < rounds; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         console.log(`Computer: ${computerSelection}`);
//         console.log(`Player: ${humanSelection}`);

//         playRound (humanSelection, computerSelection);
//         console.log(`Computer Score: ${computerScore} ... Player Score: ${humanScore}`);
//     }
//     console.log("end loop");

//     if (humanScore > computerScore) {
//         console.log("You win the game!");
//     } else if (computerScore > humanScore) {
//         console.log("You lose the game.")
//     } else {
//         console.log ("Tie Game!");
//     }
// }    

// playGame(3)