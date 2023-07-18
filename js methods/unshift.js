Array.prototype.myUnshift = function (...elements) {
    const newElements = [...elements];
    const oldElements = [...this];
    this.length = 0;
    this.length = oldElements.length + newElements.length;
    for (let i = 0; i < this.length; i++) {
        this[i] = newElements[i];
        if (i >= newElements.length){
            this[i] = oldElements[i - newElements.length]
        }
    }

    return this.length;
}

const array1 = [1, 2, 3];

console.log(array1.myUnshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
