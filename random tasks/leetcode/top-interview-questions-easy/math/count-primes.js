// Given an integer n, return the number of prime numbers that are strictly less than n.

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0
// Two consecutive numbers which are natural numbers and prime numbers are 2 and 3.
// Apart from 2 and 3, every prime number can be written in the form of 6n + 1 or 6n – 1, where n is a natural number.
// To find the prime numbers greater than 40,the general formula that can be used is n2+ n + 41,
//  where n are natural numbers  0, 1, 2, ….., 39

//  For example:

// (0)2 + 0 + 0 = 41
// (1)2 + 1 + 41 = 43
// (2)2 + 2 + 41 = 47
// (3)2 + 3 + 41 = 53
// (4)2 + 2 + 41 =  59…..so on

// (0)2 + 0 + 0 = 0
// (1)2 + 1 + 1 = 3
// (2)2 + 2 + 1 = 5
// (3)2 + 3 + 1 = 13
// (4)2 + 2 + 41 =  59…..so on

// (0)2 + 0 + 1 = 1
// (0)2 + 0 - 1 = 0
// -
// (1)2 + 1 + 1 = 3
// (1)2 + 1 - 1 = 2
// -
// (2)2 + 2 + 1 = 7
// (2)2 + 2 - 1 = 5
// -
// (3)2 + 3 + 1 = 13
// (3)2 + 3 - 1 = 12
// -
// (4)2 + 2 + 1 = 19

// TODO: solution
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  // function removeMultiple(number) {
  //   let k = 2;
  //   let indexOfPow = 1;
  //   while (indexOfPow > -1) {
  //     powNumberToDelete = number * k;
  //     console.log("number Pow: ", number);
  //     console.log("k: ", k);
  //     console.log("powNumberToDelete: ", powNumberToDelete);
  //     indexOfPow = allNumbers.indexOf(powNumberToDelete);
  //     if (indexOfPow > -1) {
  //       allNumbers.splice(indexOfPow, 1);
  //       console.log("sucess~");
  //     }
  //     k++;
  //   }
  // }
  let allNumbers = Array.from({ length: n - 2 }, (v, i) => i + 2);
  console.log("allNumbers: ", allNumbers);
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      console.log("i, j: ", i, j);
      if (i % j == 0) {
        console.log("i % j:", i % j);
        // allNumbers.splice(i, 1);
        let indexOfNum = allNumbers.indexOf(i);
        let number = allNumbers[indexOfNum];
        // removeMultiple(number);
        if (indexOfNum > -1) {
          allNumbers.splice(indexOfNum, 1);
        }
      } else {
        console.log("i is prime: ", i);
      }
    }
    console.log("------");
  }
  return allNumbers;
};

// console.log(countPrimes(10));

// 6n + 1 or 6n – 1
var countPrimes2 = function (n) {
  let counter = 0;
  let allNumbers = Array.from({ length: n - 2 }, (v, i) => i + 2);
  console.log("allNumbers: ", allNumbers);
  sqrtLoop: for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      console.log("i, j: ", i, j);
      if (i % j == 0) {
        console.log("i % j:", i % j);
        let indexOfNum = allNumbers.indexOf(i);
        let number = allNumbers[indexOfNum];
        if (indexOfNum > -1) {
          console.log("number to splice: ", number);
          allNumbers.splice(indexOfNum, 1);
          counter++;
          // break sqrtLoop;
        }
      } else {
        console.log("i is prime: ", i);
      }
    }
    console.log("------");
  }
  // console.log("counter: ", counter);
  console.log("counter?: ", n - counter - 2);
  console.log("allNumbers.length: ", allNumbers.length);
  return allNumbers;
};

// console.log(countPrimes2(2350));

// -----
var countPrimes3 = function (n) {
  let counter = 0;
  // let allNumbers = Array.from({ length: n - 2 }, (v, i) => i + 2);
  // console.log("allNumbers: ", allNumbers);
  for (let i = 2; i <= n; i++) {
    sqrtLoop: for (let j = 2; j <= Math.sqrt(i); j++) {
      console.log("i, j: ", i, j);
      if (i % j == 0) {
        console.log("i % j:", i % j);
        // let indexOfNum = allNumbers.indexOf(i);
        // let number = allNumbers[indexOfNum];
        // if (indexOfNum > -1) {
        // console.log("number to splice: ", number);
        // allNumbers.splice(indexOfNum, 1);
        counter++;
        break sqrtLoop;
        // }
      } else {
        console.log("i is prime: ", i);
      }
    }
    console.log("------");
  }
  // console.log("counter: ", counter);
  console.log("counter?: ", n - counter - 1);
  // console.log("allNumbers.length: ", allNumbers.length);
  // return allNumbers;
};

// console.log(countPrimes3(10));

//-------

var countPrimes4 = function (n) {
  let counter = 0;
  for (let i = 1; i < n; i++) {
    sqrtLoop: for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        counter++;
        break sqrtLoop;
      }
    }
  }

  return n - counter - 2 < 0 ? 0 : n - counter - 2;
};

// console.log("primes: ", countPrimes4(461465));
// console.log("primes: ", countPrimes4(433933));

// console.log(countPrimes4(15));
// 2, 3, 5, 7, 11, and 13.
12357 - 1;
2357;

var countPrimes5 = function (n) {
  let counter = 0;
  let realCounter = 0;
  let primes = [];
  if (n == 3) {
    primes.push(2);
  }
  if (n > 3) {
    primes.push(2, 3);
  }
  for (let i = 1; i < n; i++) {
    sqrtLoop: for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        counter++;
        break sqrtLoop;
      } else {
        realCounter++;
        console.log("i: ", i);
        primes.push(i);
        j = i;
        break;
      }
    }
  }

  if (n == 3) {
    realCounter++;
  }

  if (n > 3) {
    realCounter += 2;
  }

  console.log("primes: ", primes);

  console.log("real counter: ", realCounter);
  return n - counter - 2 < 0 ? 0 : n - counter - 2;
};

// console.log(countPrimes4(2));
// console.log(countPrimes5(10));

var countPrimes6 = function (n) {
  let counter = 0;
  let primes = [];
  if (n == 3) {
    primes.push(2);
  }
  if (n > 3) {
    primes.push(2, 3);
  }
  x = 3;
  for (let i = 1; i < n; i++) {
    sqrtLoop: for (let j = 0; j < x; j++) {
      if (i % j == 0) {
        break sqrtLoop;
      } else {
        counter++;
        console.log("i: ", i);
        primes.push(i);
        j = i;
        break;
      }
    }
    // sqrtLoop: for (let j = 2; j <= Math.sqrt(i); j++) {
    //   if (i % j == 0) {
    //     break sqrtLoop;
    //   } else {
    //     counter++;
    //     console.log("i: ", i);
    //     primes.push(i);
    //     j = i;
    //     break;
    //   }
    // }
  }
  console.log("primes: ", primes);
};

// console.log(countPrimes4(2));
console.log(countPrimes6(10));
