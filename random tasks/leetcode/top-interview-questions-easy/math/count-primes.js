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
  let allNumbers = Array.from({ length: n - 2 }, (v, i) => i + 2);
  console.log("allNumbers: ", allNumbers);
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      console.log("i, j: ", i, j);
      if (i % j == 0) {
        console.log("i % j:", i % j);

        // allNumbers.splice(i, 1);
        let indexOfNum = allNumbers.indexOf(i);
        if (indexOfNum > -1) {
          allNumbers.splice(indexOfNum, 1);
        }
      }
    }
    console.log("------");
  }
  return allNumbers.length;
};

console.log(countPrimes(10));
