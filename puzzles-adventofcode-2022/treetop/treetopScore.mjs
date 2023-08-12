import { readFileSync } from "fs";
let highestScore = 0;
let test = {};
var forest = readFileSync("input.txt").toString().split("\n");
forest = forest.map((row) => row.split("").map(Number));
for (let row = 0; row < forest.length; row++) {
  for (let pos = 0; pos < forest[row].length; pos++) {
    let treeInfo = {
      tree: forest[row][pos],
      row,
      pos,
    };

    let treeScore = getScore(treeInfo);
    highestScore = treeScore > highestScore ? treeScore : highestScore;
  }

  function getScore(treeInfo) {
    return (
      getRightScore(treeInfo) *
      getTopScore(treeInfo) *
      getBottomScore(treeInfo) *
      getLeftScore(treeInfo)
    );
  }

  function getLeftScore(treeInfo) {
    let partOfRowOnLeft = getRowTreesToCompare(
      0,
      treeInfo.pos,
      treeInfo.row
    ).reverse();
    return scoreCounter(treeInfo.tree, partOfRowOnLeft);
  }

  function getRightScore(treeInfo) {
    let partOfRowOnRight = getRowTreesToCompare(
      treeInfo.pos + 1,
      forest[row].length,
      treeInfo.row
    );
    return scoreCounter(treeInfo.tree, partOfRowOnRight);
  }

  function getBottomScore(treeInfo) {
    let columnBelow = getColTreesToCompare(
      treeInfo.row + 1,
      forest.length,
      treeInfo.pos
    );
    return scoreCounter(treeInfo.tree, columnBelow);
  }

  function getTopScore(treeInfo) {
    let columnAbove = getColTreesToCompare(
      0,
      treeInfo.row,
      treeInfo.pos
    ).reverse();
    return scoreCounter(treeInfo.tree, columnAbove);
  }

  function getColTreesToCompare(start, end, pos) {
    return forest.slice(start, end).map((row) => row[pos]);
  }

  function getRowTreesToCompare(start, end, row) {
    return forest[row].slice(start, end);
  }

  function scoreCounter(thisTree, treesToCompare) {
    let score = 0;
    for (let [pos, tree] of treesToCompare.entries()) {
      score++;
      if (tree >= thisTree) {
        score = pos;
        score++;
        break;
      }
    }
    return score;
  }
}

console.log("highestScore", highestScore);
