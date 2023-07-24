// 
Array.prototype.myReverse = function() {
    let array = this.concat();
    // let reversedArray = []
    for (let i = array.length - 1; i > 0; i-- ) {
        // i == array.length - 1 ? i = array.length - : i;
        console.log('i', i);
        console.log('this[i]', this[i]);
        console.log('array[array.length - i]', array[array.length - i]);
        // reversedArray.push(...array.slice(i, i + 1));
        this[i] = array[array.length - i - 1];
    }
    return this
    
}

console.log([7,13,30,45].myReverse());