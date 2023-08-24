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

// Input: num = 4
// Output: "IV"
// Explanation: IV represents 4.

// Input: num = 9
// Output: "IX"
// Explanation: IX represents 9.

// Input: num = 14
// Output: "XIV"
// Explanation: X = 10 and IV = 4.

// Input: num = 44
// Output: "XLIV"
// Explanation: XL = 40 and IV = 4.

// Input: num = 89
// Output: "LXXXIX"
// Explanation: L = 50, XXX = 30, and IX = 9.

// Input: num = 144
// Output: "CXLIV"
// Explanation: C = 100, XL = 40 and IV = 4.

// Input: num = 399
// Output: "CCCXCIX"
// Explanation: CCC = 300, XC = 90, and IX = 9.

// Input: num = 487
// Output: "CDLXXXVII"
// Explanation: CD = 400, LXXX = 80, and VII = 7.

// Input: num = 888
// Output: "DCCCLXXXVIII"
// Explanation: DCCC = 800, LXXX = 80, and VIII = 8.

// Input: num = 2019
// Output: "MMXIX"
// Explanation: MM = 2000, X = 10, and IX = 9.

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  romanThousand = {
    int: {
      1000: "M",
    },
    intSub: {},
  };
  romanHundreds = {
    intSub: {
      400: "CD",
      900: "CM",
    },
    int: {
      500: "D",
      100: "C",
    },
  };

  romanTens = {
    intSub: {
      90: "XC",
      40: "XL",
    },
    int: {
      50: "L",
      10: "X",
    },
  };

  romanUnits = {
    intSub: {
      9: "IX",
      4: "IV",
    },
    int: {
      5: "V",
      1: "I",
    },
  };

  const decode = [romanUnits, romanTens, romanHundreds, romanThousand];
  function getSummedRoman(partOfNumber, i, toReturn) {
    const arrayToWorkWith = Object.entries(decode[i].int).reverse();
    for (let key of arrayToWorkWith) {
      if (partOfNumber >= key[0]) {
        partOfNumber = partOfNumber - key[0];
        toReturn.push(key[1]);
        getSummedRoman(partOfNumber, i, toReturn);
        break;
      }
    }
    return toReturn;
  }
  function getRoman(partOfNumber, i) {
    return (
      decode[partOfNumber.toString().length - 1].int[partOfNumber] ||
      decode[partOfNumber.toString().length - 1].intSub[partOfNumber] ||
      getSummedRoman(partOfNumber, partOfNumber.toString().length - 1, [])
    );
  }

  num = num.toString().split("");
  for (let i = 0; i < num.length; i++) {
    num[i] = num[i] * Math.pow(10, num.length - i - 1);
    num[i] = getRoman(num[i], i);
  }
  return num.join("").replace(/,/g, "");
};

console.log(intToRoman(108));
// Input: num = 888
// Output: "DCCCLXXXVIII"
// Explanation: DCCC = 800, LXXX = 80, and VIII = 8.

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
