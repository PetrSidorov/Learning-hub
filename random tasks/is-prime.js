// Write a JavaScript function called isPrime that takes a positive integer as input
// and returns true if the number is prime, and false otherwise. The function should perform the following steps:

// Check if the input is a positive integer.
// If the input is less than 2, return false since prime numbers are greater than 1.
// Iterate from 2 up to the square root of the input number (inclusive).
// For each iteration, check if the input number is divisible evenly by the current iteration number.
// If it is divisible evenly, return false since it is not a prime number.
// After the iteration completes without finding a divisor, return true since the number is prime.
// Here's an example usage of the function:

// TODO: look at this with Artyom
const number = 17;
const isPrimeNumber = isPrime(number);
console.log(isPrimeNumber); // Output: true

// function 