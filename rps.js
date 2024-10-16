const readlineSync = require('readline-sync');
function rockPaperScissors(player1, player2) {
  //While loops ask for user input until rock, paper or scissors is inputted
  let rps = ['rock', 'paper','scissors']
  player1 = readlineSync.question ('Player 1, choose rock, paper or scissors: ');
  while (!rps.includes(player1)){
    player1 = readlineSync.question ('Please enter rock, paper or scissors to continue: ');
  }
  player2 = readlineSync.question ('Player 2, choose rock, paper or scissors: ');
  while (!rps.includes(player2)){
    player2 = readlineSync.question ('Please enter rock, paper or scissors to continue: ');
  }
  
  if (player1 === player2){
    return 'Draw'
  } else if ((player1==='rock'&&player2==='scissors')||(player1==='scissors'&&player2==='paper'||player1==='paper'&&player2==='rock')){
    return 'Player1 Wins'
  } else {
    return 'Player2 wins'
  }
}

console.log(rockPaperScissors())










// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}