let humanScore = 0
let computerScore = 0


function getComputerChoice(){
     const randomNumber = Math.floor(Math.random() * 3);
     let choice;
     if(randomNumber === 0){
          choice = 'rock';
     } else if (randomNumber === 1){
          choice = 'paper';
     } else {
          choice = 'scissors';
     }
     return choice
     
}

console.log(getComputerChoice());

function getHumanChoice(){

const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");

signButton.addEventListener("click", () => {
  let sign = prompt("Rock, Paper, Scissors?");

  if (sign === null) {
    console.log("OK, maybe next time.");
  }  else {
    console.log(`${sign}!`.toLowerCase());
  }
});

}

console.log(getHumanChoice());


function playRound(humanChoice, computerChoice){

     if (humanChoice === 'rock' && computerChoice === 'rock'){
          return 'You tied!'
     } else if(humanChoice === 'scissors' && computerChoice === 'scissors'){
          return 'You tied!'
     } else if(humanChoice === 'paper' && computerChoice === 'paper'){
          return 'You tied!'
     } else if(humanChoice === 'rock' && computerChoice === 'scissors'){
          return 'You win!'
     } else if(humanChoice === 'paper' && computerChoice === 'rock'){
          return 'You win!'
     } else if(humanChoice === 'scissors' && computerChoice === 'paper'){
          return 'You win!'
     } else if(humanChoice === 'scissors' && computerChoice === 'rock'){
          return 'You lose!'
     } else if(humanChoice === 'paper' && computerChoice === 'scissors'){
          return 'You lose!'
     } else if(humanChoice === 'rock' && computerChoice === 'paper'){
          return 'You lose!'
     }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
