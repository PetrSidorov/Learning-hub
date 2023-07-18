var x = 40;
console.log(x++);
console.log(x);

console.log(++x);
console.log(x);
console.log(typeof c);
//

// Special Values: NaN
var myAge = Number("0046"); // 38
var myNextAge = Number ("39"); // 39
var myCatsAge = Number("n/a"); // NaN
myAge - "my son's age"; // NaN
myCatsAge == myCatsAge; // false OOPS!


isNaN(myAge); // false
isNaN(myCatsAge); // true
isNaN("my son's age"); // true OOPS!
Number.isNaN (myCatsAge); // true
Number.isNaN("my son's age"); // false





