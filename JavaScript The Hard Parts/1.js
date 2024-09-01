// JavaScript principles
// When JavaScript code runs, it:
// -> Goes through the code line-by-line and runs / executes each line -
// known as thread of execution (execution thread)
// -> Saves 'data' like strings and arrays so we can use the data later -
// in its memory. We can even save code as 'functions'

const num = 3;
function multiplyBy2(inputNumber) {
  // inputNumber is a parameter
  // we store argument in a parameter.
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);

// Execution context - thread of execution + Local Memory
// We have only one thread of execution in JavaScript
// for loop doesn't get it's execution context

// Callback function is function which is passed to higher order function

function any(input) {
  return input * 2;
}

// const any = (input) => {
//   return input * 2;
// };

// const any = (input) => input * 2;

// const any = (input) => input * 2;

function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(counter);
  }
  return incrementCounter;
}

const myNewFunction = outer();
// myNewFunction();
// myNewFunction();
const test = myNewFunction;
// test();

// https://frontendmasters.com/courses/javascript-hard-parts-v2/function-closure/
// -2:53
// persistent lexical static scope reference data - backpack
// closure is basically the same thing
// case 1:
// function delay(func, wait) {
//   setTimeout(func, wait);
// }

// delay(() => console.log('test'), 3000)

// case 2:
// CHALLENGE 7
// function rollCall(names) {
// 	let counter = 0
//   return function handleNameCalls(){
//     counter < names.length ? console.log(names[counter])  : console.log( 'Everyone accounted for')
//     counter++
//   }
// }

// // /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'

// CHALLENGE 9
function cycleIterator(array) {
  let counter = -1;
  return function iterate() {
    if (counter == array.length - 1) {
      counter = 0;
    } else {
      counter++;
    }

    return array[counter];
  };
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// The problem of functions being run by web browser (using browser
// features like fetch) is that the data is available only inside the function,
// which was used as a callback. That creates callback hell
class SecondClock {
  constructor(cb) {
    // ADD CODE HERE
    this.cb = cb;
    this.intervalId = null;
  }

  start() {
    const seconds = new Date.getSeconds();
    this.intervalId = setInterval(() => this.cb(seconds), 1000);
  }

  reset() {
    clearInterval(this.intervalId);
  }
  // ADD METHODS HERE
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock((val) => {
  console.log(val);
});
console.log("Started Clock.");
clock.start();
setTimeout(() => {
  clock.reset();
  console.log("Stopped Clock after 6 seconds.");
}, 6000);

// ask Artem what are other ways to do that
// ----------------------------------------
class SecondClock {
  constructor(cb) {
    // ADD CODE HERE
    this.cb = cb;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(
      () =>
        this.cb(
          (function getDate() {
            const date = new Date();
            return date.getSeconds();
          })()
        ),
      1000
    );
  }

  reset() {
    clearInterval(this.intervalId);
  }
  // ADD METHODS HERE
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock((val) => {
  console.log(val);
});
console.log("Started Clock.");
clock.start();
setTimeout(() => {
  clock.reset();
  console.log("Stopped Clock after 6 seconds.");
}, 6000);
// ----------------------------------------
// fetch returns a promise
// xhr  xml http request
//callback queue - it's the place where callbacks are added by browser api's
//  two proned facade functions - function that are connected with web browser and js
// microtask queue

// callstack runs first -> microtask queue -> callback queue
// In JavaScript, the execution of tasks is managed through various queues, primarily the microtask queue and the callback (or task) queue. Here's what gets added to each:

// Microtask Queue
// The microtask queue is used for handling tasks that should be executed immediately after the current script runs, but before the event loop continues to other types of tasks. Items typically added to the microtask queue include:

// Promise callbacks: These are the .then(), .catch(), and .finally() handlers of Promises.
// Async/await: The handling of asynchronous functions is implemented through promises, which use the microtask queue.
// MutationObserver callbacks: These are callbacks that execute in response to DOM changes, and are processed in the microtask queue.
// queueMicrotask() function: This allows developers to directly queue microtasks.
// Callback Queue (Task Queue)
// The callback queue, also known as the task queue, is used for tasks scheduled to run after the completion of all currently running scripts and all microtasks. The event loop checks this queue only after the microtask queue is empty. Tasks typically placed in the callback queue include:

// SetTimeout and SetInterval callbacks: Timed events use the callback queue.
// I/O events: These include responses to network operations, file operations, and so forth.
// UI events: These are events triggered by user interactions like clicks, keyboard events, etc.
// Other API callbacks: This can include callbacks from various web APIs that aren't associated with promises.
// The distinction between these queues ensures that microtasks always have a higher priority and are executed before tasks in the callback queue, allowing the JavaScript environment to handle operations like DOM updates or promise resolutions as soon as possible before moving on to less urgent tasks like events or timed operations.
// -----
// higher order function are functions that are returning 