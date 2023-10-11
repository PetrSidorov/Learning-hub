// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// var isValid = function (s) {
//   function matchingPairs(firstChar, lastChar) {
//     if (
//       (firstChar == "{" && lastChar == "}") ||
//       (firstChar == "[" && lastChar == "]") ||
//       (firstChar == "(" && lastChar == ")")
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   function outerCheck(s) {
//     if (matchingPairs(s.charAt(0), s.charAt(s.length - 1))) {
//       console.log("outer---------------");
//       let strippedOuter = s.slice(1, -1);
//       if (!strippedOuter.length) {
//         return true;
//       }
//       return outerCheck(strippedOuter);
//     } else {
//       return innerCheck(s);
//     }
//   }

//   function innerCheck(s) {
//     let start = s.charAt(0);
//     let end = s.charAt(s.length - 1);
//     console.log("start: ", start);
//     // console.log("end: ", end);
//     for (let i = 0; i < s.length; i++) {
//       if (matchingPairs(start, s[i]) && (i - 1) % 2 == 0) {
//         console.log("ORIGINAL S", s);
//         let strippedOuter = s.slice(1, -1);
//         let innerThing = strippedOuter.substring(start, i + 1);
//         // oute
//         console.log("innerThing: ", innerThing);
//         console.log("----------");
//         if (outerCheck(innerThing)) {
//           let rest = s.substring(i + 1, end);
//           console.log("rest: ", rest);
//           outerCheck(rest);
//         }
//       }
//     }
//     return false;
//   }

//   if (outerCheck(s) || innerCheck(s)) {
//     return true;
//   } else return false;
// };

var isValid = function (s) {
  function getSecondPar(char) {
    switch (char) {
      case "{":
        return "}";
        break;
      case "[":
        return "]";
        break;
      case "(":
        return ")";
        break;
      case "}":
        return "{";
        break;
      case "]":
        return "[";
        break;
      case ")":
        return "(";
        break;
      default:
        return "error";
    }
  }

  function find(char, s) {
    console.log("char: ", char);
    console.log(s.indexOf(char));
  }

  for (let char of s) {
    let secondPar = getSecondPar(char);
    // find(secondPar, s);
    s.indexOf(char);
  }
};
// console.log(isValid("(*[]*@@)"));
console.log(isValid("[{[]}]()"));
// console.log(isValid("(([]))({})"));
// console.log(isValid("(2[]){2)"));
// console.log(isValid("([])[{()}]{[]}"));
// isValid("(([]){})");
// console.log(isValid("[{([{()}])}]"));
