import { readFileSync } from "fs";
const log = console.log;

const elvePairs = readFileSync("example.txt")
    .toString()
    .split("\n")
    .map(elvePair => elvePair
        .split(",")
        .map(pair => pair.split("-").map(Number)));

    // log(elvePairs);

let crosses = 0;
let all = new Set
for ( let pairs of elvePairs ) {
    if ((pairs[0][0] <= pairs[1][0] ) && (pairs[0][1] >= pairs[1][1]) || (pairs[0][0] >= pairs[1][0] ) && (pairs[0][1] <= pairs[1][1])){
        crosses++;
    }
}


console.log(crosses);