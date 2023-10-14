// @ts-check
const ROWS = 10;
const COLS = 10;

/**
 *
 * @param {number} numberOfRows
 * @param {number} numberOfCols
 * @returns {boolean[][]}
 */
function generateBoard(numberOfRows, numberOfCols) {
  return Array.from({ length: numberOfRows }, () =>
    Array.from({ length: numberOfCols }, () => false)
  );
}
//   return Array.from({ length: numberOfRows }, () =>
//     new Array(numberOfCols).fill(false)
//   );

// const board = generateBoard();

/**
 *
 * @param {boolean[][]} board
 * @returns {HTMLElement}
 */
function renderBoard(board) {
  let boardEl = Object.assign(document.createElement("div"), {
    className: "grid",
    style: `display:grid;grid-template-columns: repeat(${COLS}, 30px);grid-template-rows: repeat(${ROWS}, 30px);`,
  });

  for (let row of board) {
    for (let cell of row) {
      boardEl.append(
        Object.assign(document.createElement("div"), {
          className: cell ? "cell cell-alive" : "cell cell-dead",
          style:
            "border: 1px solid black;" +
            (cell ? " background-color: green;" : ""),
        })
      );
    }
  }

  return boardEl;
}

function spawnGeneration(board) {
  board[0][0] = true;
  return board;
}

// SIDE EFFECTS SECTION
document.body.append(renderBoard(spawnGeneration(generateBoard(ROWS, COLS))));
document.body.append(renderBoard(spawnGeneration(generateBoard(ROWS, COLS))));

// function someFunc(bool) {
//   // let bool = false;
//   bool = true;
// }

// let myBool = false;
// someFunc(myBool); // passed by value / pass by reference
// console.log(myBool); // ?

// let openedSections = ["upcoming"];
// const isSectionOpen = (section) => openedSections.includes(section);
// const isSectionClose = R.not(isSectionOpen);

// function not(fn) {
//   return function notted(arg) {
//     return !fn(arg);
//   };
// }

// openedSections.includes("upcoming") ? ...
// !openedSections.includes("upcoming") ? ...

// isSectionOpen("upcoming") ?
// isSectionClose("upcoming") ?
