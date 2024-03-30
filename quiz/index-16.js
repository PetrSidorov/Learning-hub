class Dog {
  constructor(name) {
    this.name = name;
    this.wagTail = () => {
      return "Wagging tail!";
    };
  }

  bark() {
    return "Woof!";
  }
}

const dog1 = new Dog("Max");
const dog2 = new Dog("Spot");

console.log(dog1.wagTail() === dog2.wagTail()); // true
console.log(dog1.wagTail === dog2.wagTail); // false
console.log(dog1.bark === dog2.bark); // true
console.log(Object.getPrototypeOf(dog1) === Object.getPrototypeOf(dog2)); // true
console.log(dog1.constructor === dog2.constructor); // true
