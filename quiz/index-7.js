function createCounter(initialCount) {
  let count = initialCount;

  return function () {
    "use strict";
    count += 1;
    return count;
  };
}

const counter = createCounter(10);
counter();
counter();
console.log(counter());
