function createCounter() {
  let globalCount = 0;

  function incrementCount() {
    let incrementedValue = ++globalCount;
    return incrementedValue;
  }

  return { incrementCount };
}

const counter = createCounter();
console.log(counter.incrementCount());
console.log(counter.incrementCount());
console.log(createCounter().incrementCount());
// 1, 2, 1
