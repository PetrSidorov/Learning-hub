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
  let numbersToTry = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  function cycle() {
    for (let row = 0; row < board.length; row++) {
      for (let numberPos = 0; numberPos < board[row].length; numberPos++) {
        if (board[row][numberPos] == ".") {
          for (numberToTry of numbersToTry) {
            board[row][numberPos] = numberToTry;
            // console.log("board: ", board);
            if (!checkAnswer(board)) {
              cycle();
            } else {
              console.log(board);
              console.log("-------");
            }
          }
        }
      }
    }
  }
  cycle();

  function checkAnswer(board) {
    let answer = false;
    for (let row = 0; row < board.length; row++) {
      for (let numberPos = 0; numberPos < board[row].length; numberPos++) {
        let number = board[row][numberPos];
        let col = board.map((row) => row[numberPos]);

        if (
          !rowIncludes(number, board[row], numberPos)
          // && !colIncludes(number, col) &&
          // !squareIncludes(board, row, numberPos)
        ) {
          answer = true;
        }
      }
    }
    // console.log(answer);
    return answer;
  }

  function rowIncludes(number, row, numberPos) {
    return row.filter((numberInRow, index) => {
      return index != numberPos;
    });
  }

  function colIncludes(number, col) {
    return col.includes(number);
  }

  function squareIncludes(board, row, numberPos) {
    let numberIsInThisThirdInRow = Math.floor(numberPos / 3);
    let numberIsInThisRowThird = Math.floor(row / 3);
    let rowsToCheck = numberIsInThisRowThird;
    let square = board
      .map((currRow, index) => {
        if (
          [
            numberIsInThisRowThird * 3,
            numberIsInThisRowThird * 3 + 1,
            numberIsInThisRowThird * 3 + 2,
          ].includes(index)
        ) {
          return currRow.slice(
            numberIsInThisThirdInRow * 3,
            numberIsInThisThirdInRow * 3 + 3
          );
        }
      })
      .flat()
      .filter((number) => {
        return number != undefined && number != ".";
      });

    return square.includes(board[row][numberPos]);
  }
};

solveSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  // ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  // [".", "9", "8", ".", ".", ".", ".", "6", "."],
  // ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  // ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  // ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  // [".", "6", ".", ".", ".", ".", "2", "8", "."],
  // [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  // [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
