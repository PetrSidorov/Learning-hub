// ready - unchecked
Array.prototype.myPush = function(...els) {
    for (let el of els) {
        this[this.length] = el;
    }
    return this.length
}

// let check = [1,2,3]
// check.myPush(4, 6)
// console.log('check',check);


// let sparseArray = new Array(5);
// console.log(sparseArray); 
 // [empty × 5]

// sparseArray.myPush('test');
// console.log(sparseArray);  
// [empty × 5, "test"]

// function testPush() {
//     console.log(arguments); 
//     // { '0': 'arg1', '1': 'arg2', '2': 'arg3', length: 3 }

//     Array.prototype.push.call(arguments, 'newArg');
//     console.log(arguments); 
//     // { '0': 'arg1', '1': 'arg2', '2': 'arg3', '3': 'newArg', length: 4 }
// }

// testPush('arg1', 'arg2', 'arg3');
