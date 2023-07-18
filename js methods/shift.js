Array.prototype.myShift = function(){
    let originalArrayCopy = [...this];
    this.length = 0;
    for (i = 1; i < originalArrayCopy.length; i++) {
        this.push(originalArrayCopy[i]);
    }

    return originalArrayCopy[0];
}

// why it works here:
const array1 = [1, 2, 3];
array1.myShift();
console.log(array1);