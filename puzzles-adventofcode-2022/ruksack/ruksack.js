import { readFileSync } from "fs";
const log = console.log;
const rucksacks = readFileSync("input.txt").toString().split("\n");

const rucksacskWithCompartments = rucksacks.map(function (rucksack) {
  const firstHalf = rucksack.slice(0, rucksack.length / 2);
  const secondHalf = rucksack.slice(rucksack.length / 2, rucksack.length);
  return [firstHalf, secondHalf];
});

const alphabet = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function letterToPriotity(letter) {
  return alphabet.indexOf(letter);
}

const countPriotity = rucksacskWithCompartments
  .map((rucksack) =>
    rucksack[0].split("").filter((letter) => rucksack[1].includes(letter))
  )
  // .map( letters => Array.from(new Set(letters)) )
  .map((letters) => letterToPriotity(letters[0]))
  .reduce((acc, num) => acc + num, 0);
// console.log(countPriotity);

// const result = rucksacks.map( ( element, i ) => element[i] + element )
let rucksacksGroupedByThree = [];

for (let i = 0; i < rucksacks.length; i += 3) {
  rucksacksGroupedByThree.push(rucksacks.slice(i, i + 3));
}

let totalPriority = 0;
for (let group of rucksacksGroupedByThree) {
  let common = [];
  let [firstGroup, ...otherGroups] = group;
  charLoop: for (let char of firstGroup) {
    for (let rucksack of otherGroups) {
      if (!rucksack.includes(char)) {
        continue charLoop;
      }
    }
    if (!common.includes(char)) {
      common.push(char);
    }
  }
  totalPriority += common
    .map(letterToPriotity)
    .reduce((a, b) => a + b);
}
console.log(totalPriority);
// console.log(сommon);
