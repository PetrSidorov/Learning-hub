// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1
// /**
//  * @param {number} x
//  * @return {number}
//  */
var reverse = function (x) {
  let reversed = "";
  if (x < -(2 ** 31) && x > 2 ** 31 - 1) {
    return;
  }
  let sign = Math.sign(x);
  x = Math.abs(x);

  if (x / 10 < 1) {
    return x * sign;
  }

  while (x > 3) {
    x = x / 10;
    console.log("x: ", x);
    let next = parseInt((x % 1).toFixed(2) * 10);
    console.log("next: ", next);
    reversed += x;
    x = next;
  }

  console.log(reversed);
  return reversed * sign;
};
/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//   let reversed = "";
//   while (x.toFixed(1) > 1) {
//     x = x / 10;
//     console.log("x :", x);
//     let next = (x % 1).toFixed(1) * 10;
//     console.log("next: ", next);
//     reversed += x;
//     x = next;
//   }
//   console.log("reversed: ", parseInt(reversed));
// };

reverse(123);
// reverse(10);
// reverse(120);
// console.log("----");
// console.log(Math.ceil((1.2 % 1) * 10) / 10);
