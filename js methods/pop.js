// ready - unchecked
Array.prototype.myPop = function(){
    const lastEl = this[this.length - 1];
    if (this.length != 0) {
        this.length -= 1;
    }
    
    return lastEl;
}

// let test = [1,2,3];
// let check = test.myPop();
// console.log(test)

let empty = [];

let test = empty.myPop();
console.log(test)
