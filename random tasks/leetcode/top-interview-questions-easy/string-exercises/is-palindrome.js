function isOriginalPalindrome(word) {
  const length = word.length;
  let isPalindrome = true;

  for (let i = 0; i < length; i++) {
    if (word[i] !== word[length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  // let i = 0;
  // let j = word.length - 1;

  // while (i <= j) {
  //     if (word[i] != word[j]) {
  //         isPalindrome = false;
  //         break;
  //     };
  //     i++;
  //     j--;
  // }

  return isPalindrome;
}

// console.log(isPalindrome('тест'))
// console.log(isPalindromeLeet("caac"));
// console.log(isPalindromeLeet("racecar"));
// console.log(isPalindrome("ab".repeat(1_000_000)));

// below is leetcode version

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]+/g, "");
  const length = s.length;
  let isPalindrome = true;

  for (let i = 0; i < length; i++) {
    if (s[i] !== s[length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
};

// console.log(isPalindrome("caac"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0P"));
