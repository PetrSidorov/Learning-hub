const outerFunc = () => {
  let count = 0;
  return () => ++count;
};

const counter = outerFunc();
console.log(counter());
console.log(counter());
