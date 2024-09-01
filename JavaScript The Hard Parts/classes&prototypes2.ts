// prototype chain example
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  doSomething: () => {
    console.log("hi");
  },
  increment: function () {
    function add1() {
      console.log("increment.add1 this", this);
      this.score++;
      //   console.log("this ", this);
      console.log("score ", score);
    }
    add1();
    // someObject.add1();
    // new add1();
    // add1.call(someObject);
    // add1.apply(someObject);
    // add1();
  },
  arrowIncrement: function () {
    // let score = 0;
    // this.score = 0;
    score = 0;

    const add1 = () => {
      this.score++;
    };

    console.log("arrow score ", this.score);
    add1();
    console.log("global score", global.score);
  },
};

const test = userCreator("Tim", 2);
test.increment();
test.arrowIncrement();
// console.log(test);
// test.doSomething();
// console.log(test.__proto__.__proto__.toString());
// console.log(test.__proto__.hasOwnProperty("doSomething"));
// console.log(test.hasOwnProperty(toString));
// in the line above why do i get weird results with doSometing ?
// console.log(Object.getPrototypeOf(test));

// "this" is an implicit parameter
//  where do we find hasOwnProperty ?
// 'this' with new keyword confusion
