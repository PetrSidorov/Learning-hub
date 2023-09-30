function reduce(array, callback, initialValue) {
  let acc = initialValue;
  for (let element in array) {
    acc = callback(acc, element);
  }
  return acc;
}

// function add(a, b) {
//   return a + b;
// }

// add(add(1, 2), 3)
