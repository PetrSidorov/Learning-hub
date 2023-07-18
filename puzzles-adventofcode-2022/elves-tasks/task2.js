import { readFileSync } from "fs";
const log = console.log;
const elvePairs = readFileSync("example.txt").toString().split("\n").map(elvePair => elvePair.split(",").map(pair =>  pair.split("-").map(Number)));
function findOverlap(element) {
    let max0 = Math.max(...element[0]);
    let max1 = Math.max(...element[1]);
    let min0 = Math.min(...element[0]);
    let min1 = Math.min(...element[1]);
    if (min1 > max0) {
        return false;
    }
    if (min0 > max1) {
        return false;
    }

    return true;
}

let result = elvePairs.filter(element => {
   return findOverlap(element);
});

log(result.length)