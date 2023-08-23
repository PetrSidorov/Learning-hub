// const nums = [2, 7, 11, 15];
// const target = 9;

// function solution(nums, target) {
//   for (let num of nums) {
//     let indexSecondNum = nums.indexOf(target - num);
//     if (indexSecondNum > -1) {
//       return [num, nums[indexSecondNum]];
//     }
//   }
//   return null;
// }

// console.log(solution(nums, target));

// const nums = [2, 7, 11, 15];
// const target = 9;
const nums = [3, 2, 4];
const target = 6;
function solution(nums, target) {
  for (let indexFirstNum = 0; indexFirstNum < nums.length; indexFirstNum++) {
    let indexSecondNum = nums.indexOf(target - nums[indexFirstNum]);
    // console.log("target - nums[indexFirstNum]", target - nums[indexFirstNum]);
    console.log("indexFirstNum", indexFirstNum);
    console.log("indexSecondNum", indexSecondNum);
    console.log("nums[indexFirstNum]", nums[indexFirstNum]);
    console.log("nums[indexSecondNum]", nums[indexSecondNum]);
    if (indexSecondNum > -1 && indexSecondNum != indexFirstNum) {
      return [indexFirstNum, indexSecondNum];
    }
  }
  return null;
}

console.log(solution(nums, target));
