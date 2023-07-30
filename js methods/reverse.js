 // TODO: check with corner cases
Array.prototype.myReverse = function() {
    let array = this.concat();
    // let reversedArray = []
    for (let i = 0; i < array.length; i++ ) {
        this[i] = array[array.length - i - 1];
    }
    return this;
    
}

console.log([7,13,30,45].myReverse());