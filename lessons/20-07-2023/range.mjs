/**
 * 
 * @param {number} stop 
 */
function range(stop) {
    return {
        [Symbol.iterator]() {
            var value = 0;
            return {
                next() {
                    var currentValue = value;
                    value++;
                    return { value: currentValue, done: currentValue == stop }
                }
            };
        }
    };
}

function* rangeGen(stop) {
    for (let value = 0; value < stop; value++) {
        yield value;
    }
}

var rangeIterable = rangeGen(10);

console.log([...rangeIterable]);


// for (let [index, elemetn] of [1, 2, 3].entries()) Object.entries([1, 2, 3]) []

// var iterable = range(1000);
// var iteartor = iterable[Symbol.iteartor]();

// while (true) {
//     let result = iterator.next();
//     if (result.done) {
//         break;
//     }
//     // do something with result.value
//     console.log(result.value);
// }

// var iterable = {
//     [Symbol.iterator]() {
//         return iterator;
//     }
// }

// var iterator = {
//     next() {
//         return { value: 0, done: false };
//     }
// }


// for (let i of range(10)) {
    // console.log(i); // 0 1 2 3 4 5 6 7 8 9
// }

// console.log([...range(10)]);


// for (let i = 0; i < 10; i++) {

// }

// while (true) {

// }

// do {

// } while ();

// for (;;) {

// }

// for (let done = false; !done;) {

// }

// for await (let value of promises)

// let done = false;
// while (!done) {

// }


// let i = 0;
// while (i < 10) {
//     i++;
// }
