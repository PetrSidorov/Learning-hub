// Create a sum(), which makes following possible
// https://bigfrontend.dev/problem/create-a-sum
//
// const sum1 = sum(1)
// sum1(2) == 3 // true
// sum1(3) == 4 // true
// sum(1)(2)(3) == 6 // true
// sum(5)(-1)(2) == 6 // true

/**
 * @param {number} num
 */
function sum(num) {

  return function help(arg) {
    help[Symbol.toPrimitive] = function (hint) {
      if (hint === 'number') {
        return arg
      }
    }
    return sum(arg + num)
  }
}



const sum1 = sum(1)
console.log(sum1(2) == 3) // true
console.log(sum1(3) == 4) // true
console.log(sum(1)(2)(3) == 6) // true
console.log(sum(5)(-1)(2) == 6) // true
