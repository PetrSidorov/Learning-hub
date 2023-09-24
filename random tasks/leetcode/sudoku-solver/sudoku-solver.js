// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.
// Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let arrayToCheckNumbers = checkAllRowsAndColums(board);
  let finalArrayToCheckNumbers = checkSquares(board, arrayToCheckNumbers);
  let solution = findSolution(board, finalArrayToCheckNumbers);
  // console.log("arrayToCheckNumbers", finalArrayToCheckNumbers);

  function findSolution(board, finalArrayToCheckNumbers) {
    loopThroughNumbers(board, finalArrayToCheckNumbers);
    function loopThroughNumbers(board, finalArrayToCheckNumbers) {
      // Object.values(numberObject)[0]
      // console.log("final", finalArrayToCheckNumbers);
      // start test
      let testBoards = [];
      // let testBoard = board.slice();
      // let matchNumberObj = testBoard.map((row) =>
      //   row.find((numberObj) => Object.keys(numberObj)[0])
      // );
      // Object.values(matchNumberObj)[0] = numbersArray[i];
      // end test
      function launchLoop(counter) {
        for (; counter < finalArrayToCheckNumbers.length; counter++) {
          var testBoard = board.slice();
          let numbersArray = Object.values(
            finalArrayToCheckNumbers[counter]
          )[0];
          var key = Object.keys(finalArrayToCheckNumbers[counter])[0];
          if (numbersArray) {
            for (let i = 0; i < numbersArray.length; i++) {
              testBoards.push(findMatchNumberObj(key, board));
              // console.log("matchNumberObj ", matchNumberObj);
              // Object.values(matchNumberObj)[0] = numbersArray[i];
              // console.log("numbersArray", numbersArray[i]);
              counter += 1;
              launchLoop(counter);
            }
          }
        }
        // testBoards.push(testBoard);
        console.log("testBoards ", JSON.stringify(testBoards, null, 2));
      }
      launchLoop(1);
      function findMatchNumberObj(id, board) {
        let testBoard = board;
        let matchNumberObj = null;
        for (let i = 0; i < testBoard.length; i++) {
          const row = testBoard[i];
          for (let j = 0; j < row.length; j++) {
            const numberObj = row[j];
            if (Object.keys(numberObj)[0] === id) {
              matchNumberObj = numberObj;
              break;
            }
          }
          if (matchNumberObj) {
            break;
          }
        }
        return testBoard;
      }
      // console.log("testBoards ", JSON.stringify(testBoards, null, 2));
    }
  }
  function checkAllRowsAndColums(board) {
    let arrayToCheckNumbers = [];
    for (let row = 0; row < board.length; row++) {
      for (
        let numberPosition = 0;
        numberPosition < board[row].length;
        numberPosition++
      ) {
        board[row][numberPosition] = {
          [Math.random().toString(36).substr(2, 9)]: board[row][numberPosition],
        };
        if (Object.values(board[row][numberPosition])[0] === ".") {
          arrayToCheckNumbers.push(
            checkRowColumnForNumber(board, row, numberPosition)
          );
        }
      }
    }

    return arrayToCheckNumbers;
  }
};

function checkRowColumnForNumber(board, row, numberPosition) {
  let objectToCheckNumbers = {};
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let numbersOnLeft = board[row].slice(0, numberPosition);
  let numbersOnTheRight = board[row].slice(numberPosition + 1, row.length);
  let boardWithoutCurrRow = board.slice();
  boardWithoutCurrRow.splice(row, 1);
  const numbersUpAndDown = [];

  for (let i = 0; i < boardWithoutCurrRow.length; i++) {
    numbersUpAndDown.push(
      ...boardWithoutCurrRow[i].slice(numberPosition, numberPosition + 1)
    );
  }

  let numbersToAvoid = numbersOnLeft.concat(
    numbersOnTheRight,
    numbersUpAndDown
  );

  let valuesToAvoid = numbersToAvoid.map((obj) => Object.values(obj)[0]);
  let numbersToTry = numbers.filter(
    (number) => !valuesToAvoid.includes(number)
  );

  objectToCheckNumbers[Object.keys(board[row][numberPosition])[0]] =
    numbersToTry;

  return objectToCheckNumbers;
}

function checkSquares(board, arrayToCheckNumbers) {
  const boardSplit = [];
  for (let rowNumber = 0; rowNumber < board.length; rowNumber += 3) {
    let rowGroup = board.slice(rowNumber, rowNumber + 3);
    for (let i = 0; i < 3; i++) {
      boardSplit.push([
        rowGroup[0].slice(i, i + 3),
        rowGroup[1].slice(i, i + 3),
        rowGroup[2].slice(i, i + 3),
      ]);
    }
  }
  boardSplit.map((square) => {
    for (number of arrayToCheckNumbers) {
      let key = Object.keys(number)[0];
      square.map((line) => {
        const match = line.find(
          (numberObj) => Object.keys(numberObj)[0] === key
        );
        if (match) {
          let numbersToAvoid = new Set();
          // console.log("square ", square);
          square.map((line) =>
            line.map((numberObj) =>
              numbersToAvoid.add(Object.values(numberObj)[0])
            )
          );
          numbersToAvoid = [...numbersToAvoid];
          let finalNumbersToTry = Object.values(number)[0].filter(
            (number) => !numbersToAvoid.includes(number)
          );

          number[key] = finalNumbersToTry;
        }
      });
    }
  });
  return arrayToCheckNumbers;
}

solveSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  // ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  // ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  // ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  // [".", "6", ".", ".", ".", ".", "2", "8", "."],
  // [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  // [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
// Given 9x9 grid
// const grid = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];
