///---------- RPS for TOP ----------\\\

let roundCount = 0; 
let playerInput = 0;
let computerInput = 0;
let playerScore = 0;
let computerScore = 0;


try {


for (roundCount = 1; roundCount <= 5; roundCount++) {

console.log("Round: " + roundCount); 

// 1. prompt player to input either rock, paper or scissors (make sure it's case insensitive) 
playerInput = prompt("Enter your choice of rock, paper or scissors",);

if (playerInput.toLowerCase() != "rock" && playerInput.toLowerCase() != "paper" && playerInput.toLowerCase() != "scissors") {
    alert("Please enter either rock, paper or scissors for the game to work");
    playerInput = prompt("Enter your choice of rock, paper or scissors",);
} { playerInputFinal = playerInput; 
}; 

console.log("You Chose " + playerInputFinal.toUpperCase()); 


// 2. generate random rock, paper or scissors for computer 
// computer input


let computerInputRand = Math.random() * 10;
let computerInputNum = Math.floor(computerInputRand);

if (computerInputNum >= 1 && computerInputNum <= 3) {
    computerInputFinal = "rock"; 
} else if (computerInputNum >= 4 && computerInputNum <= 6) {
    computerInputFinal = "paper"; 
    } else {computerInputFinal = "scissors"};

    console.log("Computer Chose " + computerInputFinal.toUpperCase());
    

    if (playerInputFinal.toLowerCase() == "rock" && computerInputFinal.toLowerCase() == "rock") {
        console.log("It's a tie!");
    } else if (playerInputFinal.toLowerCase() == "rock" && computerInputFinal.toLowerCase() == "paper") {
        console.log("Paper beats Rock! PC WINS");
        computerScore++;
    } else if (playerInputFinal.toLowerCase() == "rock" && computerInputFinal.toLowerCase() == "scissors") {
        console.log("Rock beats Scissors! YOU WIN");
        playerScore++;
    } else if (playerInputFinal.toLowerCase() == "paper" && computerInputFinal.toLowerCase() == "rock") {
        console.log("Paper beats Rock! YOU WIN")
        playerScore++;
    } else if (playerInputFinal.toLowerCase() == "paper" && computerInputFinal.toLowerCase() == "paper") {
        console.log("It's a Tie!");
    } else if (playerInputFinal.toLowerCase() == "paper" && computerInputFinal.toLowerCase() == "scissors") {
        console.log("Scissors beat Paper! PC WIN")
        computerScore++;
    } else if (playerInputFinal.toLowerCase() == "scissors" && computerInputFinal.toLowerCase() == "scissors") {
        console.log("It's a Tie!")
    } else if (playerInputFinal.toLowerCase() == "scissors" && computerInputFinal.toLowerCase() == "paper") {
        console.log("Scissors beats Paper! YOU WIN")
        playerScore++;
    } else if (playerInputFinal.toLowerCase() == "scissors" && computerInputFinal.toLowerCase() == "rock") {
        console.log("Rock beats Paper! PC WIN")
        computerScore++;
    } else console.log("Something's Wrong!")


console.log("Player Score = " + playerScore);
console.log("Computer Score = " + computerScore);


}


if (playerScore > computerScore) {
    console.log("YOU WIN! The final score is " + playerScore + " to " + computerScore);
    alert("YOU WIN! The final score is " + playerScore + " to " + computerScore);
}
    else if (computerScore > playerScore) {
    console.log("PC WINS! The final score is " + computerScore + " to " + playerScore);
    alert("PC WINS! The final score is " + computerScore + " to " + playerScore);
} else {console.log("IT'S A TIE!")}



}

catch(err) {
    console.log("You need to input either rock, paper or scissors. If you exit, we'll just terminate the code. Refresh please :)")
}