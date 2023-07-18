Array.prototype.myReverse = function() {
    let array = this;
    let reversedArray = []
    for (let i = array.length; i >=0; i-- ) {
        reversedArray.push(...array.slice(i, i + 1));
    }
    return reversedArray
    
}

console.log([1,2,3,4].myReverse());