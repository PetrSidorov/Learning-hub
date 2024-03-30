class Counter {
  constructor(initialCount = 0) {
    this.count = initialCount;
  }

  increment() {
    return this.count++;
  }
}

const counterOne = new Counter(1);
counterOne.increment(); // 2
const counterTwo = Object.create(counterOne);
counterTwo.increment(); // 3

console.log(counterOne.count, counterTwo.count);
// 2, 3
