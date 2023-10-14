// const nums = [2, 7, 11, 15];
// const target = 9;
// const nums = [3, 2, 4];
// const target = 6;
// const nums = [3, 3];
// const target = 6;

function solution(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let firstNum = nums[i] - nums.indexOf(target - nums[i]);
    // console.log("secondNum: ", target - nums[i]);
    let secondNum = target - nums[i];
    let indexOfFirst = nums.indexOf(firstNum);
    let indexOfSecond = nums.indexOf(secondNum);
    console.log(indexOfFirst);
    if (indexOfFirst > -1 && indexOfFirst != indexOfSecond) {
      return [indexOfFirst, indexOfSecond];
    } else if (indexOfFirst > -1 && indexOfFirst != indexOfSecond) {
      indexOfSecond = nums.indexOf(secondNum, indexOfSecond + 1);
      console.log(indexOfSecond);
      console.log(indexOfFirst);
      // return []
    }
  }
  // for (let num of nums) {
  //   let indexSecondNum = nums.indexOf(target - num);
  //   let indexFirstNum = nums.indexOf(num);
  //   console.log("indexFirstNum: ", indexFirstNum);
  //   if (indexSecondNum != indexFirstNum) {
  //     return [indexFirstNum, indexSecondNum];
  //   }
  // }
}

console.log(solution(nums, target));

// const nums = [2, 7, 11, 15];
// const target = 9;
// const nums = [3, 2, 4];
// const target = 6;
// function solution(nums, target) {
//   for (let indexFirstNum = 0; indexFirstNum < nums.length; indexFirstNum++) {
//     let indexSecondNum = nums.indexOf(target - nums[indexFirstNum]);
//     // console.log("target - nums[indexFirstNum]", target - nums[indexFirstNum]);
//     console.log("indexFirstNum", indexFirstNum);
//     console.log("indexSecondNum", indexSecondNum);
//     console.log("nums[indexFirstNum]", nums[indexFirstNum]);
//     console.log("nums[indexSecondNum]", nums[indexSecondNum]);
//     if (indexSecondNum > -1 && indexSecondNum != indexFirstNum) {
//       return [indexFirstNum, indexSecondNum];
//     }
//   }
//   return null;
// }

// console.log(solution(nums, target));
