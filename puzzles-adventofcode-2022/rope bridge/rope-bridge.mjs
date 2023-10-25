import { readFileSync } from "fs";
import { promises as fs } from "fs";
const commands = readFileSync("input.txt").toString().split("\n");

let tailPositions = new Set();
const vector = {
  headX: 0,
  headY: 0,
  tailX: 0,
  tailY: 0,
  tailMove: 0,
  direction: "",
  turn: false,
};

const sumWithInitial = commands.reduce(moveRope, vector);

function moveRope(vector, move) {
  //   console.log(vector, move);
  let direction = move[0];
  let steps = move[2];
  let nextMove = {};
  for (let i = 0; i < steps; i++) {
    nextMove = moveTail(moveHead(vector, direction));
  }
  return vector;
}

function moveHead(vector, direction) {
  if (direction == "U") {
    vector.headY += 1;
  } else if (direction == "R") {
    vector.headX += 1;
  } else if (direction == "D") {
    vector.headY -= 1;
  } else if (direction == "L") {
    vector.headX -= 1;
  }
  vector.direction = direction;
  return vector;
}

function moveTail(vector) {
  tailPositions.add(`${vector.tailX}:${vector.tailY}`);
  if (
    (vector.turn == true && vector.headY == vector.tailY) ||
    (vector.turn == true && vector.headX == vector.tailX)
  ) {
    vector.turn = false;
  } else {
    if (vector.turn == true) {
      if (vector.direction == "U" || vector.direction == "D") {
        vector.tailX = vector.headX;
        vector.tailMove += 1;
      } else if (vector.direction == "R" || vector.direction == "L") {
        vector.tailY = vector.headY;
        vector.tailMove += 1;
      }
      vector.turn = false;
    }

    if (vector.headY != vector.tailY && vector.headX != vector.tailX) {
      vector.turn = true;
    }

    if (vector.direction == "U") {
      if (Math.abs(vector.headY) - Math.abs(vector.tailY) > 1) {
        vector.tailY = vector.headY - 1;
        vector.tailMove += 1;
      }
    }

    if (vector.direction == "D") {
      if (Math.abs(vector.tailY) - Math.abs(vector.headY) > 1) {
        vector.tailY = vector.headY + 1;
        vector.tailMove += 1;
      }
    }

    if (vector.direction == "R") {
      if (Math.abs(vector.headX) - Math.abs(vector.tailX) > 1) {
        vector.tailX = vector.headX - 1;
        vector.tailMove += 1;
      }
    }

    if (vector.direction == "L") {
      if (Math.abs(vector.tailX) - Math.abs(vector.headX) > 1) {
        vector.tailX = vector.headX + 1;
        vector.tailMove += 1;
      }
    }
  }

  render(vector);
  console.log(vector);
  fs.appendFile("output.txt", JSON.stringify(vector), (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File written successfully!");
    }
  });

  console.log("------=------");
  return vector;
}

function render(vector) {
  let array = new Array(6).fill(null).map(() => new Array(6).fill("-"));
  for (let row = 0; row < array.length; row++) {
    for (let cell = 0; cell < array[row].length; cell++) {
      if (array.length - 1 - row == vector.headY) {
        array[row][vector.headX] = "H";
      }
      if (array.length - 1 - row == vector.tailY) {
        array[row][vector.tailX] = "T";
      }
    }
  }
  console.log(array);
}

function renderResult(tailPositions) {
  let array = new Array(6).fill(null).map(() => new Array(6).fill("."));
  Array.from(tailPositions).map(
    (position) => (array[array.length - 1 - position[2]][position[0]] = "#")
  );
  // for (let row = 0; row < array.length; row++) {
  //   for (let cell = 0; cell < array[row].length; cell++) {
  //     if (array.length - 1 - row == vector.headY) {
  //       array[row][vector.headX] = "H";
  //     }
  //     if (array.length - 1 - row == vector.tailY) {
  //       array[row][vector.tailX] = "T";
  //     }
  //   }
  // }
  console.log(array);
}

console.log("tailPositions.size: ", tailPositions.size);
// renderResult(tailPositions);
// fs.writeFile("output.txt", data, (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//   } else {
//     console.log("File written successfully!");
//   }
// });
