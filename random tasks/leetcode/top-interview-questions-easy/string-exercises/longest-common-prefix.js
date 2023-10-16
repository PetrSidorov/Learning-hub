// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// TODO: review with Artyom, refactor
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";

  for (let charIndex = 0; charIndex < strs[(i = 0)].length; charIndex++) {
    let set = new Set();
    for (var i = 0; i < strs.length; i++) {
      set.add(strs[i][charIndex]);
    }

    if (set.size == 1) {
      prefix += [...set][0];
    } else {
      break;
    }
  }
  // console.log(prefix);
  return prefix;
};
// var longestCommonPrefix = function (strs) {
//   let charPos = 0;
//   let prefix = null;
//   while (prefix == null) {
//     if (strs.length == 1) {
//       prefix = strs[0];
//       break;
//     }
//     for (let i = 0; i < strs.length - 1; i++) {
//       if (
//         strs[i].charAt(charPos) != strs[i + 1].charAt(charPos) ||
//         charPos >= strs[i].length
//       ) {
//         prefix = strs[i].slice(0, charPos);
//         break;
//       }
//     }
//     charPos++;
//   }
//   return prefix;
// };

// console.log(typeof "".charAt(0));
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["a"]));
// console.log(longestCommonPrefix([""]));
// console.log(longestCommonPrefix(["dog", "dog", "dog"]));
// console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
// console.log(longestCommonPrefix(["flowx", "flowre", "flowfd", "flowjh"]));
// console.log(longestCommonPrefix(["cir", "car"]));
