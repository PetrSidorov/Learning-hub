Array.prototype.myPop = function(){
    this.length -= 1;
    return this[this.length - 1];
}

let test = [1,2,3];
let check = test.myPop();
console.log(test)