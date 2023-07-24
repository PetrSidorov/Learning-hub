Array.prototype.mySplice = function(...args) {
    let [start, deleteCount, ...arrItems] = args;
    start = start > this.length ? this.length : start;
    let modifiedArray = [];
    
    for (let i = 0; i < modifiedArray.length - 1; i++){
        if (this[i] === start){

        }
    }

    // An array containing the deleted elements.
    // If only one element is removed,
    // an array of one element is returned.
    // If no elements are removed,
    // an empty array is returned.
    return [];
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


