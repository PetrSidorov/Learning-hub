// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k %= nums.length;
  let count = 0;

  for (let start = 0; count < nums.length; start++) {
    let current = start;
    let prev = nums[start];

    do {
      let next = (current + k) % nums.length;
      let temp = nums[next];
      nums[next] = prev;
      prev = temp;
      current = next;
      count++;
    } while (start !== current);
  }
};

// rotate([1, 2, 3, 4, 5, 6, 7], 3);
// Output: [5,6,7,1,2,3,4]

// rotate([-1, -100, 3, 99], 2);
// Output: [3,99,-1,-100]

// rotate([-1, -100, 3, 99], 1);
// rotate([-1, -100, 3, 99], 1);
// rotate([-1, -100, 3, 99], 2);
// Output:
// [4,5,6,7,1,2,3]
// Expected:
// [5,6,7,1,2,3,4]

// Input:
// [-1,-100,3,99]
// 2
// Output:
// [99,-1,-100,3]
// Expected:
// [3,99,-1,-100]
