// var someFunction = require('some-module') // common js
// umd (universal module definition)
// amd (asynchronous module defition)
// node js 2009

import { readFileSync } from 'fs' // esm (ecma script modules) 2015

const data = readFileSync("input.txt").toString();
const arrayFromData = data.split("\n\n");

// convert data to an array of strings
// for each string in the array, calculate the sum
// find the biggest sum

let maxSum = 0;

arrayFromData.forEach( function( item ) {
    const itemClean = item.split("\n");

    let sum = 0;
    itemClean.forEach( function(stringNumber){
       const number =  Number(stringNumber);
        sum += number;
    });

    if (sum > maxSum) {
        maxSum = sum;
    }
})