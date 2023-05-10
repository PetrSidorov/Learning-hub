// var someFunction = require('some-module') // common js
// umd (universal module definition)
// amd (asynchronous module defition)
// node js 2009



import FileReader from './FileReader.js';
const filePath = './elves-rock-paper-scissors/input.txt';
const fileReader = new FileReader(filePath);
const data = fileReader.readData();

// first day start
const arrayFromData = fileReader.convertToArray(data);
import ElveProcessor from './elves-calories/ElveProcessor.js';
const elveProcessor = new ElveProcessor(arrayFromData);
const maxSum = elveProcessor.countMax(3);
alert('Max sum:', maxSum);
// first day end

// second day start
// import Tournament from './elves-rock-paper-scissors/Tournament.js'
// const tournament =  new Tournament( data );
// const tournamentResult = tournament.playTournament();
// console.log(tournamentResult);
// second day end