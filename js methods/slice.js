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
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
Array.prototype.mySlice = function( start, end ) {
    let resultArray = [];

    const arrayLength = this.length;
    function changeBoundIfNegative(bound, arrayLength){
        return arrayLength + bound
    }

    const changeBound = (bound, arrayLength) => arrayLength + bound;
    if (start < 0){
        start = changeBound(start, arrayLength);
    }

    if (end < 0){
        end = changeBound(end, arrayLength);
    }
   
    for (const [i, element] of this.entries()) {
        if (i < start) {
            continue;
        }
        if (i === end){
            break;
        }
        resultArray.push(element);
      }

    return resultArray;
}

const copy = animals.mySlice(2);

// console.log(animals.mySlice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.mySlice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.mySlice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.mySlice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(copy);