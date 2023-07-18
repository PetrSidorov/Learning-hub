

// Функция поиска
// минимального и
// максимального значений в
// массиве
// minMax([2, 9, 10, 25, 47, 4, 1]); // [1, 47]
// minMax([2, 1]);
// minMax([1]);
// [1, 2]
// [1, 1]
// ----------------------------------------------------------------------
function minMax(array) {
    let sortedAsc = array.sort((a, b) => a - b);
    return [sortedAsc[0], sortedAsc[array.length - 1]]
}
minMax([9, 2, 10, 25, 47, 4, 1]);
// ----------------------------------------------------------------------
// Функция суммирования всех цифр числа
// sumDigits(99); // 18 sumDigits(-32); // 5
// ----------------------------------------------------------------------
function sumDigits(number){
    return Math.abs(number).toString().split('').reduce(( a, b ) => Number(a) + Number(b));
}

// console.log(sumDigits(-32))

// ----------------------------------------------------------------------
// Функция проверки
// палиндрома?
// isPalindrome('тест'); // false isPalindrome('шалаш'); // true

function isPalindrome(word){
    let isPalindrome = false;
    let wordOrig = word.split('');
    const wordRevert = word.split('').reverse();
    if (wordOrig.length === wordRevert.length && wordOrig.every((char, index) => char === wordRevert[index])){
        isPalindrome = true;
    }
    return isPalindrome;
}

// console.log(isPalindrome('тест'))
// console.log(isPalindrome('шалаш'))

// задача на карирование
// функция суммирования чисел, которая работает слелдующим образом
// sum(3)(4)
// ???????
function curry(f) { // curry(f) выполняет каррирование
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  function sum(a, b) {
    return a + b;
  }
  
let curriedSum = curry(sum);
// console.log(curriedSum);

// Write a JavaScript function called calculateAverage that takes an array of numbers as
// input and returns the average of the numbers in the array. The function should perform the following steps:

// Check if the input is a valid array.
// If the array is empty, return 0.
// Iterate over the array and sum up all the numbers.
// Divide the sum by the length of the array to get the average.
// Round the average to two decimal places.
// Return the average.
// Here's an example usage of the function:


function calculateAverage(array){
    if (!Array.isArray(array)){
        throw new TypeError('not an array')
    }
    return array.length!= 0 ? (array.reduce((a, b) => a + b ) / array.length).toFixed(2) : 0;
}

const numbers = [2, 4, 6, 8, 10];
console.log(calculateAverage(numbers));

// Write a JavaScript function called isPrime that takes a positive integer as input
// and returns true if the number is prime, and false otherwise. The function should perform the following steps:

// Check if the input is a positive integer.
// If the input is less than 2, return false since prime numbers are greater than 1.
// Iterate from 2 up to the square root of the input number (inclusive).
// For each iteration, check if the input number is divisible evenly by the current iteration number.
// If it is divisible evenly, return false since it is not a prime number.
// After the iteration completes without finding a divisor, return true since the number is prime.
// Here's an example usage of the function:

const number = 17;
const isPrimeNumber = isPrime(number);
console.log(isPrimeNumber); // Output: true
