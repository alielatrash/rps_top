// RPS vs PC 
// There's a winner and there's a loser

// Computer Choice // 
let computerChoiceNum = Math.floor(Math.random() * 3);

if (computerChoiceNum == 0) {
    computerChoice = "Rock";
    console.log(`Computer Chose ${computerChoice}`);
} else if (computerChoiceNum == 1) {
    computerChoice = "Paper";
    console.log(`Computer Chose ${computerChoice}`);
} else {
    computerChoice = "Scissors";
    console.log(`Computer Chose ${computerChoice}`);
};


// Player Choice //
let playerChoice = prompt("Choose between rock, paper or scissors!");

console.log(`You Chose ${playerChoice.toLowerCase()}`);


// Compare Score // 
let playerScore = 0;
let computerScore = 0;

for (roundCount=1; roundCount <= 5; roundCount++) {



if (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "rock") {
    console.log("It's a tie!");
} else if (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") {
    console.log("Paper beats Rock! PC WINS");
    computerScore++;
} else if (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
    console.log("Rock beats Scissors! YOU WIN");
    playerScore++;
} else if (playerChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
    console.log("Paper beats Rock! YOU WIN")
    playerScore++;
} else if (playerChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "paper") {
    console.log("It's a Tie!");
} else if (playerChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors") {
    console.log("Scissors beat Paper! PC WINS")
    computerScore++;
} else if (playerChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "scissors") {
    console.log("It's a Tie!");
} else if (playerChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
    console.log("Scissors beats Paper! YOU WIN")
    playerScore++;
} else if (playerChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock") {
    console.log("Rock beats Paper! PC WINS")
    computerScore++;
}

console.log(`Round: ${roundCount}`);
console.log(`Computer: ${computerScore} & You: ${playerScore}`);

}

if (playerScore > computerScore) {
    console.log(`YOU WIN! --> YOU: ${playerScore} PC: ${computerScore}`);
} else if (computerScore > playerScore) {
    console.log(`PC WINS! --> YOU: ${playerScore} PC: ${computerScore}`);
} else {
    console.log(`It's a TIE! --> YOU: ${playerScore} PC: ${computerScore}`);
}

