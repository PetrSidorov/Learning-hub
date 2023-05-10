const example = [ 1, 2 ];

// const map1 = example.at

function slice(array) {

}

function map(array, transform) {
    // let transformedArray = slice(array);
    // let transformedArray = array.slice();
    let transformedArray = [];

    for (let i = 0; i < array.length; i++) {
        transformedArray[i] = transform(array[i]);
    }

    // for (let element of transformedArray) {
    //    element = transform(element);
    // }

    return transformedArray
}

var students = ["Harry", "Ron", "Hermione"]

var ron = students[1]

ron = "Draco"

console.log(students[1])

var textInput = '99,80,b,95,100,a'

// textInput
//   .split(',')
//   .map(Number)
//   .filter(Boolean)
//   .forEach(function printEach(n) {
//     console.log(n)
//   })


console.log(
    map(textInput.split(','), Number)
)

