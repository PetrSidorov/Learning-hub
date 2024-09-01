function reduce(array, callback, initialValue) {
  let acc = initialValue;
  for (let element of array) {
    acc = callback(acc, element);
  }
  return acc;
}

function add(a, b) {
  return a + b;
}

// console.log(add(add(1, 2), 3));
