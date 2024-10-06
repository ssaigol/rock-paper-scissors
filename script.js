
function getComputerChoice () {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    
    let a = Math.random();
    if (a < 0.34) {
        return rock;
    } else if (a >= 0.67) {
        return paper;
    } else {return scissors}
}




function getHumanChoice () {
    for (let i = 0; i < 1;) {
        let choice = prompt("Please type rock, paper, or scissors");
        let invalid = "Please enter a valid answer";
        let valid = `You chose ${choice}.`;

        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return valid;
            i++;
        }
    }
}

