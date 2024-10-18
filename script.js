// let humanScore = 0;
// let computerScore  = 0;

// function getComputerChoice () {
//     let a = Math.random();
//     if (a < 0.34) {
//         return "rock";
//     } else if (a >= 0.67) {
//         return "paper";
//     } else {return "scissors"}
// }

// function getHumanChoice () {
//         let userInput = prompt("Please type rock, paper, or scissors");
//         let choice = userInput.toLowerCase();
//         if (choice === "rock" || choice === "paper" || choice === "scissors") {
//             return choice;
//         } else {
//             console.log("Please enter a valid move.");
//             return getHumanChoice();
//         }
// }

// function playRound (humanChoice, computerChoice) {
//     const win = "You win! ";
//     const lose = "You lose! ";
//     const rockWins = "Rock beats Scissors.";
//     const paperWins = "Paper beats Rock";
//     const scissorsWins = "Scissors beats Paper.";

//         if (humanChoice === "rock" && computerChoice === "paper") {
//             console.log(lose + paperWins);
//             computerScore++;
//         }
//         else if (humanChoice === "rock" && computerChoice === "scissors") {
//             console.log(win + rockWins);
//             humanScore++;
//         }
//         else if (humanChoice === "paper" && computerChoice === "rock") {
//             console.log(win + paperWins);
//             humanScore++;
//         }
//         else if (humanChoice === "paper" && computerChoice === "scissors") {
//             console.log(lose + scissorsWins);
//             computerScore++;
//         }
//         else if (humanChoice === "scissors" && computerChoice === "rock") {
//             console.log(lose + rockWins);
//             computerScore++;
//         }
//         else if (humanChoice === "scissors" && computerChoice === "paper") {
//             console.log(win + scissorsWins);
//             humanScore++;
//         }
//         else console.log("Tie! Go again.")
// }

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


