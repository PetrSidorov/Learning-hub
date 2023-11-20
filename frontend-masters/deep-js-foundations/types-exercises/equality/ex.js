// TODO: write `findAll(..)`
// The findAll(..) function takes a value and an array. It returns an array.

// The coercive matching that is allowed:

// exact matches (Object.is(..)) +
// strings (except "" or whitespace-only) can match numbers
// numbers (except NaN and +/- Infinity) can match strings (hint: watch out for -0!)
// null can match undefined, and vice versa
// booleans can only match booleans
// objects only match the exact same object
function findAll(val, arr) {
  function stringNumberMatch(val, el) {
    console.log(val, el);
    console.log(
      [val, el].some((v) => {
        if (
          v === "" ||
          v === " " ||
          Object.is(v, Infinity) ||
          Object.is(v, NaN) ||
          Object.is(v, -0)
        ) {
          return Object.is(val, el);
        } else {
          return val == el;
        }
      })
    );
    console.log("----");
    return [val, el].some((v) => {
      if (
        v === "" ||
        v === " " ||
        Object.is(v, Infinity) ||
        Object.is(v, NaN) ||
        Object.is(v, -0)
      ) {
        return Object.is(val, el);
      } else {
        return val == el;
      }
    });
  }

  return arr.filter((el) => {
    if (
      (typeof val == "number" && typeof el == "string") ||
      (typeof el == "number" && typeof val == "string")
    ) {
      return stringNumberMatch(val, el);
    }

    if (Object.is(val, el)) {
      return true;
    } else {
      if (
        (val === undefined && el === null) ||
        (el === undefined && val === null)
      ) {
        return true;
      }
      return false;
    }

    if (typeof val == "boolean" || typeof el == "boolean") {
      return val === el;
    }

    if (val == el) {
      return true;
    }
  });
}

// tests:
var myObj = { a: 2 };

var values = [
  null,
  undefined,
  -0,
  0,
  13,
  42,
  NaN,
  -Infinity,
  Infinity,
  "",
  "0",
  "42",
  "42hello",
  "true",
  "NaN",
  true,
  false,
  myObj,
];
// console.log(Object.is(0, -0));
console.log(findAll(0, values), [0, "0"]);
console.log(findAll(-0, values), [-0]);
console.log(findAll("", values), [""]);
console.log(findAll("0", values), [0, "0"]);
console.log("------");
// console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
// console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
// console.log(setsMatch(findAll(0, values), [0, "0"]) === true);
// console.log(setsMatch(findAll(-0, values), [-0]) === true);
// console.log(setsMatch(findAll(13, values), [13]) === true);
// console.log(setsMatch(findAll(42, values), [42, "42"]) === true);
// console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
// console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
// console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
// console.log(setsMatch(findAll("", values), [""]) === true);
// console.log(setsMatch(findAll("0", values), [0, "0"]) === true);
// console.log(setsMatch(findAll("42", values), [42, "42"]) === true);
// console.log(setsMatch(findAll("42hello", values), ["42hello"]) === true);
// console.log(setsMatch(findAll("true", values), ["true"]) === true);
// console.log(setsMatch(findAll(true, values), [true]) === true);
// console.log(setsMatch(findAll(false, values), [false]) === true);
// console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

// console.log(setsMatch(findAll(null, values), [null, 0]) === false);
// console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
// console.log(setsMatch(findAll(0, values), [0, -0]) === false);
// console.log(setsMatch(findAll(42, values), [42, "42hello"]) === false);
// console.log(setsMatch(findAll(25, values), [25]) === false);
// console.log(
//   setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false
// );
// console.log(setsMatch(findAll("", values), ["", 0]) === false);
// console.log(setsMatch(findAll("false", values), [false]) === false);
// console.log(setsMatch(findAll(true, values), [true, "true"]) === false);
// console.log(setsMatch(findAll(true, values), [true, 1]) === false);
// console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
  if (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length == arr2.length
  ) {
    for (let v of arr1) {
      if (!arr2.includes(v)) return false;
    }
    return true;
  }
  return false;
}
