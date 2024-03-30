function outer() {
  return function inner() {
    console.log("Inner function");
  };
}

const outerFunction = outer();
