// ready  - unchecked
// TODO: refactor, remove originalArrayCopy
Array.prototype.myShift = function(){
    let originalArrayCopy = [...this];
    this.length = 0;
    for (let i = 1; i < originalArrayCopy.length; i++) {
        this.push(originalArrayCopy[i]);
    }

    return originalArrayCopy[0];
}


const array1 = [1, 2, 3];
array1.myShift();
console.log(array1);

// const array2 = [];
// const test = array2.shift();
// console.log(test);