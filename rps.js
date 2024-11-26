function rockPaperScissors(player1, player2) {
  
  // Object to define the winning rules for each choice
  const winning = {
    rock: ["lizard", "scissors"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    spock: ["scissors", "rock"],
    lizard: ["spock", "paper"],
  };
  
  // Checks for draw (both players choose the same option)
  if (player1 === player2) {return "draw";}
  
  // Check if player2 is included in the winning rules for player1
  return winning[player1].includes(player2)
  ? "player1" // If player2 is in the array that player1 beats, player1 wins
  : "player2"; // Othwerwise player2 wins
}
 





// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
};