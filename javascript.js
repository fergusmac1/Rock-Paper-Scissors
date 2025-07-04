
//function returns one of three choices for the computer
function getComputerChoice() { 
 let choice = Math.floor(Math.random() * 3);
 if (choice == 0) {
 return "rock";
            }else if (choice == 1) {
 return "paper";
            }else if(choice == 2) {
 return "scissors";
            }
        }

        
 

//gives a prompt for the player to pick an option
 function getPlayerChoice() { 
 const ask = prompt("Rock, Paper, or Scissors?").toLowerCase();
 return ask;
        }


//determines the result based on the players and computers choice
 function singleRound(playerSelection, computerSelection) { 
 
    if (playerSelection === "scissors" && computerSelection === "paper") {
 return "player";
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
 return "player";
            } else if (playerSelection === "paper" && computerSelection === "rock") {
 return "player";
 
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
 return "computer";
            } else if (playerSelection === "rock" && computerSelection === "paper") {
 return "computer";
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
 return "computer";
            } else{
                return "tie";
            }

        };

 const playerSelection = getPlayerChoice();
 const computerSelection = getComputerChoice();

 let playerScore = 0
 let computerScore = 0

 function game() {  

    for(let i = 0; i < 5; i++){
 
 let result = singleRound(playerSelection, computerSelection);

 if (result === "player") {
                playerScore++;
                console.log("You won this round, you have " + playerScore + " points. Computer has " + computerScore + " points.");  
            } else if (result === "tie") {
                console.log("Tie!");
            } else if (result === "computer") {
                computerScore++;
                console.log("Computer won this round, you have " + playerScore + " points. Computer has " + computerScore + " points.");
            }
 
 if (computerScore === 5) {
                console.log("Game over, computer won!");
            } else if (playerScore === 5) {
                console.log("Game over, you won!");
            }          
        }}

        

    game()