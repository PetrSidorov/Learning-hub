Array.prototype.myJoin = function(separator) {
    if (separator === undefined){
        separator = ',';
    }
    let string = '';
    for (i = 0; i < this.length; i++) {
        string += this[i]
        if (i != this.length - 1){
            string += separator;
        }
    }

    return string;
}

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.myJoin());
// Expected output: "Fire,Air,Water"

console.log(elements.myJoin(''));
// Expected output: "FireAirWater"

console.log(elements.myJoin('-'));
// Expected output: "Fire-Air-Water"
// A string with all array elements joined. If arr.length is 0, the empty string is returned.