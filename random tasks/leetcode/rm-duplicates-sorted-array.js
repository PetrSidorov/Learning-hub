// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.
// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// TODO: solve this
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let indexOfUnique = 0;
  for (i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      console.log("nums[i]: ", nums[i]);
      console.log("nums[i + 1]: ", nums[i + 1]);
      console.log("indexOfUnique: ", indexOfUnique);
      nums[indexOfUnique] = nums[i];
      indexOfUnique = nums[i + 1];
    }
  }
  console.log("nums: ", nums);
};
// var removeDuplicates = function (nums) {
//   let startLength = nums.length;
//   for (let num of nums) {
//     let indices = [];
//     let idx = nums.indexOf(num);
//     while (idx !== -1) {
//       indices.push(idx);
//       idx = nums.indexOf(num, idx + 1);
//       if (indices.length > 1) {
//         indices.slice(1).forEach((index) => {
//           nums.splice(nums[index], 1);
//           //   nums.push(null);
//         });
//       }
//     }
//   }
//   console.log(startLength);
//   console.log(nums.length);
//   nums = nums.concat(new Array(n).fill(null));
//   //   nums.splice(nums.length, null, startLength - nums.length);
//   console.log(nums);

//   return startLength - nums.length;
// };

// console.time("removeD");
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
//console.timeEnd("removeD");

function testRemoveDuplicates() {
  const testCases = [
    {
      input: [1, 1, 2],
      expectedOutput: 2,
      expectedArray: [1, 2],
    },
    {
      input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      expectedOutput: 5,
      expectedArray: [0, 1, 2, 3, 4],
    },
    {
      input: [1, 2, 3, 4, 5], // All unique elements
      expectedOutput: 5,
      expectedArray: [1, 2, 3, 4, 5],
    },
    {
      input: [1, 1, 1, 1, 1], // All identical elements
      expectedOutput: 1,
      expectedArray: [1],
    },
    {
      input: [], // Empty array
      expectedOutput: 0,
      expectedArray: [],
    },
    {
      input: [5, 7, 7, 8, 8, 10], // Multiple duplicates
      expectedOutput: 4,
      expectedArray: [5, 7, 8, 10],
    },
    {
      input: [-1, 0, 0, 3, 3], // With negative numbers
      expectedOutput: 4,
      expectedArray: [-1, 0, 3, 3], // It should retain the relative order of the elements
    },
  ];

  testCases.forEach((testCase, index) => {
    const nums = testCase.input;
    const expectedNums = testCase.expectedArray;
    const k = removeDuplicates(nums); // Calls your implementation

    console.assert(
      k === testCase.expectedOutput,
      `Test Case ${index + 1}: Expected output ${
        testCase.expectedOutput
      } but got ${k}`
    );

    for (let i = 0; i < k; i++) {
      console.assert(
        nums[i] === expectedNums[i],
        `Test Case ${index + 1}: Expected nums[${i}] to be ${
          expectedNums[i]
        } but got ${nums[i]}`
      );
    }
  });

  console.log("All test cases pass");
}

// Here you would implement your 'removeDuplicates' function
// For example: function removeDuplicates(nums) { /* Your implementation here */ }

// Finally, call the test function
// testRemoveDuplicates();
