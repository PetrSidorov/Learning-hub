// TODO:implement binary search solution
// Example 1:

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
// Example 2:

// Input: n = 1, bad = 1
// Output: 1

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * */
function isBadVersion(version) {
  const bad = 3;
  return version >= bad;
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  return function (n) {
    for (let i = 1; i <= n; i++) {
      if (isBadVersion(i)) {
        return i;
      }
    }
  };
};

const findFirstBadVersion = solution(isBadVersion);
const n = 5;
const firstBad = findFirstBadVersion(n);
console.log(firstBad);
