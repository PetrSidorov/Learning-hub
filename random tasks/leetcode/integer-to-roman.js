// Example 1:

// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romanInt = {
    9: "IX",
    4: "IV",
    40: "XL",
    90: "XC",
    400: "CD",
    900: "CM",
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  function countSum(num) {
    for (const key in romanInt) {
        if romanInt.hasOwnProperty(key) {
            const roman = romanInt[key];
        }
    }
  }

  num = num.toString().split("");
  for (let i = 0; i < num.length; i++) {
    num[i] = num[i] * Math.pow(10, num.length - i - 1);
    num[i] = romanInt[num[i]] ? romanInt[num[i]] : countSum(num[i]);
  }
  return num;
};

console.log(intToRoman(58));
