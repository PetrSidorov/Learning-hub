// ready
Array.prototype.myConcat = function(...arraysToAdd){
    function concatArray(arrayOne, arrayToAdd){
        const newArray = []
        for (let i = 0; i < arrayOne.length; i++){
            newArray[i] = arrayOne[i]
        }

        for (let i = 0; i < arrayToAdd.length; i++){
            newArray[i + arrayOne.length] = arrayToAdd[i]
        }
        return newArray;
    }
    return arraysToAdd.reduce((accumulator, currentValue) => concatArray(accumulator, currentValue), this)


    var array = [];

    for (let arr of arraysToAdd) {
        // for (let el of arr) {
            // array.push(el);
        // }
        array.push(...arr);
    }

    return array;
}

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.myConcat(array2);

// console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

// const array1 = ['a', 'b', 'c'];
// const array2 = [];
// const array3 = array1.myConcat(array2);

// console.log(array3);
// Expected output: Array ["a", "b", "c"]

// const array1 = [];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.myConcat(array2);

// console.log(array3);
// Expected output: Array ["d", "e", "f"]

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g', 'h', 'i'];
const array4 = array1.myConcat(array2, array3);

console.log(array4);
// Expected output: Array ["a", "b", "c", "d", "e", "f", "g", "h", "i"]

// const array1 = ['a', 'b', 'c','d', 'e', 'f'];
// const array3 = ['g', 'h', 'i'];
// const array4 = array1.myConcat(array3);

// console.log(array4);