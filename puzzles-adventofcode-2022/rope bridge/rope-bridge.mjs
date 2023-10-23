import { readFileSync } from "fs";
const commands = readFileSync("input.txt").toString().split("\n");

const vector = {
  headX: 0,
  headY: 0,
  tailX: 0,
  tailY: 0,
  tailMove: 0,
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
    vector.headY += 1;
  } else if (direction == "L") {
    vector.headX += 1;
  }
  //   vector.direction = direction;
  return vector;
}

function moveTail(vector) {
  if (vector.headX - vector.tailX > 1) {
    vector.tailMove += 1;
    vector.tailX += 1;
  }
  if (vector.headY - vector.tailY > 1) {
    vector.tailMove += 1;
    vector.tailY += 1;
  }
  //   console.log(vector);
  return vector;
}
