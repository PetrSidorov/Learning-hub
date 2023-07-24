// ready - unchecked
Array.prototype.myJoin = function(separator) {
    function transformToString(element){
        if (!element){
            element = '';
        }


        return String(element);
    }

    if (separator == null){
        separator = ',';
    }

    // if (this.length == 0){
    //     string = '';
    // } else {
        let string = '';
        for (let i = 0; i < this.length; i++) {
            string += transformToString(this[i]);
            if (i != this.length - 1){
                string += String(separator);
            }
        }
    // }
    return string;
}

const elements = ['Fire', 'Air', 'Water'];
const elementsTest = [null, {'check': 'test'}, undefined];

// console.log(elements.myJoin());
// Expected output: "Fire,Air,Water"

// console.log(elements.myJoin(''));
// Expected output: "FireAirWater"

// console.log(elements.myJoin('-'));
// Expected output: "Fire-Air-Water"
// A string with all array elements joined. If arr.length is 0, the empty string is returned.

// console.log(elementsTest.myJoin(' '));
// console.log(elementsTest.join(' '));
// let arr = ['Earth', ['Fire', 'Water'], 'Air'];
// console.log(arr.myJoin('-'));

// let empty = [];
// console.log(empty.myJoin('-') === empty.join('-'));
