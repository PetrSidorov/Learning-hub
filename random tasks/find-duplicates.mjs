// Write a JavaScript function called findDuplicates that takes an array as input
// and returns an array containing the duplicate elements. Complete the function below:

// {} | new Object() {} -> Object.prototype { toString, valueOf, hasOwnProperty, isPrototypeOf, ... }
// const counts = Object.create(null); // { hasOwnProperty: 1 } -> Object.prorotype { hasOwnProperty: f }
function findDuplicates(arr) {
   const counts = new Map();
   const duplicates = [];

    for (let el of arr) {
        if (!counts.has(el)) {
            counts.set(el, 1);
        } else {
            counts.set(el, counts.get(el) + 1);
        }
    }

    for (const [key, value] of counts) {
        if (value > 1){
            duplicates.push(key);
        }
    }
    return duplicates;
}

function indexOf(array, searchValue) {
    let indexOfFound = -1
    for (let i = 0; i < array.length; i++){
        if (searchValue === array[i]){
            indexOfFound = i;
            break;
        }
    }
    return indexOfFound
}

  // Example usage:
//   console.log(findDuplicates([1, 2, 3, 4, 5, 3, 2])); // Expected output: [2, 3]
// console.log(findDuplicates(["apple", "banana", "orange", "banana", "kiwi"])); // Expected output: ["banana"]
//   console.log(findDuplicates([true, false, true, true, false])); // Expected output: [true, false]
  
// findDuplicates(["apple", "banana", "orange", "banana", "kiwi"])
// console.log(findDuplicates([true, false, true, true, false]));
// var john = { age: 22, name: "John" };
// var alan = john;
// var alan = { age: 22, name: "John" };

 console.log(findDuplicates([
     "hasOwnProperty", true , false, "true", "true", "false", "false", 1, 1, 0, 0, -1, true, false, true, NaN, NaN, "NaN", "NaN", {}, {}, {}]));