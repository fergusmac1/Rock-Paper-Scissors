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
     console.log(getComputerChoice());
}


