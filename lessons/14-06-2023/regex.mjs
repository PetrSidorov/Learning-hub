// https://regexr.com/

import { readFileSync } from "fs";

const MOBY_DICK_STR = readFileSync("moby-dick.txt")
    .toString()

// count how many times "whale" appears.
// console.log(MOBY_DICK_STR.match(/whale/gi).length)

console.log(MOBY_DICK_STR.match(/whale|the/gi).length)

// extract all numbers. [0-9] - \d
console.log(MOBY_DICK_STR.match(/\d+/g))

// extrat all years
console.log(MOBY_DICK_STR.match(/\d{4}/g))

console.log(MOBY_DICK_STR.match(/\d{1,3}/g))

console.log(MOBY_DICK_STR.match(/[A-Z][a-z]+/g));

// console.log(MOBY_DICK_STR.match(/^[A-Z]/g));

// var searchTerm = "whale";
// console.log(MOBY_DICK_STR.match(new RegExp(searchTerm, "g")));




//     .split(/\b/)
//     .map(word => word.toLowerCase());

// let whaleCounter = 0;

// for (let word of words) {
//     if (word === 'whale') {
//         whaleCounter++;
//     }
// }

// console.log(whaleCounter);

// function forOf(iterable, cb) {
//     var iterator = iterable[Symbol.iterator]();
//     var result = iterator.next();
    
//     while (!result.done) {
//         cb(result.value);
//         result = iterator.next()
//     }
// }

// forOf(words.entries(), console.log);
// forOf("hello", console.log);

