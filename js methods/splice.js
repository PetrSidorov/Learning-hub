Array.prototype.mySplice = function(...args) {
    const start = args[0];
    const deleteCount = args[1];
    const elementsToAdd = [];
    console.log(elementsToAdd);
    console.log();
    for (let i = 2; i < args.length; i++) {
        elementsToAdd[i - 2] = args[i];
    }

    const finalLength = elementsToAdd.length + this.length;
    for (i = 0; i < finalLength; i++) {
        if (i === start){
            for (let k = 0; k < elementsToAdd.length; k++) {
                this[i] = elementsToAdd[k];
            }
        }
    }

    return this;
}

const months = ['Jan', 'March', 'April', 'June'];
months.mySplice(1, 0, 'Feb');
// Inserts at index 1
console.log('months 1', months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.mySplice(4, 1, 'May', 'Hay');
// Replaces 1 element at index 4
console.log('months 2', months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
