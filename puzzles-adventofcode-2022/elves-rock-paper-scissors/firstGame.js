export function firstGame(move1, move2){
    let firstMove;
    let secondMove;
     const moves = firstGameMap(move1, move2);
        firstMove = moves.firstMove;
        secondMove = moves.secondMove;
    let score = 0;
    if (firstMove === secondMove) {
      // Draw
      score = 3;
    } else if (
      (firstMove === "Rock" && secondMove === "Scissors") ||
      (firstMove === "Scissors" && secondMove === "Paper") ||
      (firstMove === "Paper" && secondMove === "Rock")
    ) {
      // Win
      score = 6;
    }
  
    // Add the base score for the move (1 for Rock, 2 for Paper, and 3 for Scissors)
    if (firstMove === "Rock") {
        score += 1;
    } else if (firstMove === "Paper") {
        score += 2;
    } else {
        score += 3; // Scissors
    }
  
    return score;
}

function firstGameMap(move1, move2){
    const movesMap = {
        X: "Rock",
        Y: "Paper",
        Z: "Scissors",
        A: "Rock",
        B: "Paper",
        C: "Scissors"
      };
    
    const firstMove = movesMap[move1];
    const secondMove = movesMap[move2];

    return {firstMove, secondMove}
}