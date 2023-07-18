Array.prototype.myPush = function(...els) {
    for (let el of els) {
        this[this.length] = el;
    }
    return this.length
}

let check = [1,2,3]
check.myPush(4, 6)
console.log('check',check);