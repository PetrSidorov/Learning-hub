Array.prototype.myConcat = function(...arrays){
    console.log(arrays);
    // for (let i = 0; i < arrays.length; i++){
    //     return runConcat.call(this, arrays[i]);
    // }
    return arrays.reduce(runConcat.call(this, arrays[0]))
    function runConcat(arrayToAdd){
        const newArray = []
        for (let i = 0; i < this.length + arrayToAdd.length; i++){
            newArray[i] = this[i];
            if (!this.length){
                newArray[i] = arrayToAdd[i];
            } else
            if (i >= this.length){
                newArray[i] = arrayToAdd[i - arrayToAdd.length];
            }
        }
    
        return newArray;
    }
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

