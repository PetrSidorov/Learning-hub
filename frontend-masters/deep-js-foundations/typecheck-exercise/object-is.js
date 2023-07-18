Object.prototype.myIs = function (firstVal, secondVal) {
  let equal = false;
  if (typeof firstVal === typeof secondVal) {

    if (isNaN(firstVal) && typeof firstVal === 'number' && isNaN(secondVal) && typeof firstVal === 'number') {
      equal = true;
    } else if (firstVal === 0 && secondVal === 0) {
      if (1 / firstVal === 1 / secondVal) {
        equal == true;
      }
    } else if (firstVal === secondVal) {
      equal = true;
    } 
  }

  return equal;
};
// console.log(Object.myIs("foo", "bar"));
// Object.myIs(-0, -0)

// console.log( 1 / -0);
// console.log(Infinity === Infinity)

// TODO: define polyfill for `Object.is(..)`
// Object.myIs(-0,0);
// Object.myIs(0,-0);

// tests:
// console.log(Object.myIs(42, 42) === true);
// console.log(Object.myIs("foo", "foo") === true);
// console.log(Object.myIs(false, false) === true);
// console.log(Object.myIs(null, null) === true);
// console.log(Object.myIs(undefined, undefined) === true);
// console.log(Object.myIs(NaN, NaN) === true);
console.log(Object.myIs(-0, -0) === true);
console.log(Object.myIs(0, 0) === true);
console.log("--------");
// console.log(Object.myIs(-0,0) === false);
// console.log(Object.myIs(0,-0) === false);
// console.log(Object.myIs(0,NaN) === false);
// console.log(Object.myIs(NaN,0) === false);
// console.log(Object.myIs(42,"42") === false);
// console.log(Object.myIs("42",42) === false);
// console.log(Object.myIs("foo", "bar") === false);
// console.log(Object.myIs(false,true) === false);
// console.log(Object.myIs(null,undefined) === false);
// console.log(Object.myIs(undefined,null) === false);
