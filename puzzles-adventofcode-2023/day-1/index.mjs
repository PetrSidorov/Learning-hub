import { readFileSync } from "fs";

const data = readFileSync("input.txt").toString().split("\n");
const regex = /[0-9]|one|two|three|four|five|six|seven|eight|nine/g;

function formatNumber(numberArr) {
  console.log("numberArr: ", numberArr);
  function getNumber(number) {
    const numberHashTable = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };
    if (Number.isNaN(Number(number))) {
      console.log("numberHashTable[number]", numberHashTable[number]);

      return numberHashTable[number];
    } else {
      console.log("Number(number)", Number(number));
      return Number(number);
    }
  }

  // return numberArr.reduce((prev, next) => getNumber(prev) + getNumber(next));
  console.log(
    "getNumber sum: ",
    getNumber(numberArr[0]) + getNumber(numberArr[1])
  );
  return Number(
    String(getNumber(numberArr[0])) + String(getNumber(numberArr[1]))
  );
}

const numbers = data
  .map(function (line) {
    const lineT = line.match(regex);
    return [lineT[0], lineT[lineT.length - 1]];
  })
  .reduce((acc, curr) => acc + formatNumber(curr), 0);
console.log(numbers);
// console.log(data);
