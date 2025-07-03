
//function returns one of three choices for the computer
function getComputerChoice() { 
 let num1 = Math.floor(Math.random() * 3);
 if (num1 = 0) {
 return "ROCK";
            }else if (num1 = 1) {
 return "PAPER";
            }else if(num1 = 2) {
 return "SCISSORS";
            }
        }
 

//gives a prompt for the player to pick an option
 function getPlayerChoice() { 
 const ask = prompt("Rock, Paper, or Scissors?").toUpperCase();
 return ask;
 
        }


//determines the result based on the players and computers choice
 function singleRound(playerSelection, computerSelection) { 
 if (playerSelection === computerSelection) {
 return "tie";
 
            } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
 return "player";
            } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
 return "player";
            } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
 return "player";
 
            } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
 return "computer";
            } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
 return "computer";
            } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
 return "computer";
            }

        };

 const playerSelection = getPlayerChoice();
 const computerSelection = getComputerChoice();

 let playerScore = 0
 let computerScore = 0

 function game() {  
    
    for(let i = 0; i < 5; i++){
        singleRound(playerSelection, computerSelection)
    }
 
 let result = singleRound(playerSelection, computerSelection);

 if (result === "player") {
                playerScore++;
                console.log("You won this round, you have " + playerScore + " points. Computer has " + computerScore + " points.");  
            } else if (result === "tie") {
                console.log("You both picked the same option, try again!");
            } else if (result === "computer") {
                computerScore++;
                console.log("Computer won this round, you have " + playerScore + " points. Computer has " + computerScore + " points.");
            }
 
 if (computerScore === 5) {
                console.log("Game over, computer won!");
            } else if (playerScore === 5) {
                console.log("Game over, you won!");
            }          
        }

    game()