"use strict";
const ROWS = 20;
const COLS = 20;
function createGenerateBoard() {
    // return Array.from({ length: numberOfRows }, () =>
    //   Array.from({ length: numberOfCols }, () => false)
    // );
    let count = 0;
    return function (numberOfRows, numberOfCols) {
        count++;
        const board = Array.from({ length: numberOfRows }, () => Array.from({ length: numberOfCols }, () => false));
        if (count == 1) {
            // board[5][5] = true;
            // board[5][6] = true;
            // board[6][4] = true;
            // board[6][7] = true;
            // board[7][4] = true;
            // board[7][7] = true;
            // board[8][5] = true;
            // board[8][6] = true;
            // board[7][5] = true;
            for (let i = 6; i <= 14; i++) {
                board[i][6] = true;
            }
            board[5][7] = board[5][8] = board[6][9] = true;
            board[10][7] = board[10][8] = board[9][9] = true;
            for (let i = 6; i <= 14; i++) {
                board[i][11] = true;
            }
            board[5][12] = board[5][13] = board[6][14] = true;
            board[10][12] = board[10][13] = board[9][14] = true;
        }
        return board;
    };
}
const generateBoard = createGenerateBoard();
function renderBoard(board) {
    let boardEl = Object.assign(document.createElement("div"), {
        className: "grid",
        style: `display:grid;grid-template-columns: repeat(${COLS}, 30px);grid-template-rows: repeat(${ROWS}, 30px);`,
    });
    for (let row of board) {
        for (let cell of row) {
            boardEl.append(Object.assign(document.createElement("div"), {
                className: cell ? "cell cell-alive" : "cell cell-dead",
                style: "border: 1px solid black;" +
                    (cell ? " background-color: green;" : ""),
            }));
        }
    }
    return boardEl;
}
// Birth: A dead cell with exactly three live neighbors becomes a live cell (as if by reproduction).
// Survival: A live cell with two or three live neighbors stays alive (as if by survival).
// Overpopulation: A live cell with more than three live neighbors dies (as if by overpopulation).
// Underpopulation: A live cell with fewer than two live neighbors dies (as if by underpopulation).
function setStateCell(board, row, cell, surroundings) {
    if (!board[row][cell] && surroundings.length == 3) {
        return true;
    }
    else if ((board[row][cell] && surroundings.length == 2) ||
        (board[row][cell] && surroundings.length == 3)) {
        return true;
    }
    else if (board[row][cell] && surroundings.length > 3) {
        return false;
    }
    else if (board[row][cell] && surroundings.length < 2) {
        return false;
    }
    else {
        return false;
    }
}
function checkCell(board, row, cell) {
    const surroundings = [];
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i == 0 && j == 0)
                continue;
            const newRow = row + i;
            const newCell = cell + j;
            if (newRow >= 0 &&
                newRow <= ROWS - 1 &&
                newCell <= COLS - 1 &&
                newCell >= 0 &&
                board[newRow][newCell] == true) {
                surroundings.push(board[newRow][newCell]);
            }
        }
    }
    return setStateCell(board, row, cell, surroundings);
}
function spawnGeneration(board) {
    document.body.innerHTML = "";
    let nextBoard = generateBoard(ROWS, COLS);
    for (let row = 0; row < ROWS; row++) {
        for (let cell = 0; cell < COLS; cell++) {
            nextBoard[row][cell] = checkCell(board, row, cell);
        }
    }
    return nextBoard;
}
// SIDE EFFECTS SECTION
// document.body.append(renderBoard(spawnGeneration(generateBoard(ROWS, COLS))));
// Do this instead
// setInterval(() => {
// document.body.append(renderBoard(spawnGeneration(generateBoard(ROWS, COLS))));
// }, 1000);
let currentBoard = generateBoard(ROWS, COLS);
setInterval(() => {
    currentBoard = spawnGeneration(currentBoard);
    document.body.append(renderBoard(spawnGeneration(currentBoard)));
}, 2000);
