// The slice() method returns a shallow copy of a portion
// of an array into a new array object selected from start to end
// (end not included) where start and end represent the index of items
// in that array. The original array will not be modified.

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
const animals = ["ant", "bison", "camel", "duck", "elephant"];

if (!Array.prototype.mySlice) {
  Array.prototype.mySlice = function (start, end) {
    let resultArray = [];
    start ??= 0;
    end ??= this.length;
    
    if (start < 0) {
      start += this.length;

      if (start < 0) {
        start = 0;
      }
    } else if (start > this.length) {
      start = 0
    }


    if (end < 0) {
      end += this.length;
      
      if (end < 0) {
        end = 0;
      }
    } else if (end > this.length) {
      end = this.length;
    }

    if (end > start || start <= this.length){
      for (const [i, element] of this.entries()) {
        if (i < start) {
          continue;
        }
        if (i === end) {
          break;
        }
        resultArray.push(element);
      } 
    }

    return resultArray;
  };
}

// console.log(
//     animals.mySlice(2),
//     animals.mySlice(),
// )

// const copy = animals.mySlice(2);
// const copy2 = animals.mySlice();

// Test case 1: Basic slice
// console.log([1, 2, 3, 4, 5].mySlice(2, 4));
// Expected output: [3, 4]

// Test case 2: Slice with negative indices
// console.log([1, 2, 3, 4, 5].mySlice(-3, -1));
// Expected output: [3, 4]

// Test case 3: Slice with NaN and undefined
// console.log([NaN, undefined, "apple", "banana", "cherry"].mySlice(1, 4));
// Expected output: [undefined, "apple", "banana"]

// Test case 4: Slice with start index greater than end index
// console.log([1, 2, 3, 4, 5].mySlice(4, 2));
// Expected output: []

// Test case 5: Slice with start index out of range
//  console.log([1, 2, 3, 4, 5].mySlice(10, 12));
// Expected output: []

// Test case 6: Slice with end index out of range
// console.log([1, 2, 3, 4, 5].mySlice(3, 10));
// Expected output: [4, 5]

// Test case 7: Empty array
// console.log([].mySlice(0, 2));
// Expected output: []

// Test case 8: Array with one element
// console.log(["apple"].mySlice(0, 1));
// Expected output: ["apple"]
let arr = [1, 2, 3, 4, 5];

