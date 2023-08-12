// ready unchecked
Array.prototype.myFind = function(callback) {
    for (let el of this) {
        if (callback(el)){
            return el;
        }
    }
}

const myFound = array1.myFind(element => element == 10);

console.log(myFound);
// Expected output: 12