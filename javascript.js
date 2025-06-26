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

function getHumanChoice()

const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");

signButton.addEventListener("click", () => {
  let sign = prompt("Rock, Paper, Scissors?");

  if (sign === null) {
    console.log("OK, maybe next time.");
  }  else {
    console.log(`${sign}!`);
  }
});


