function logThis() {
  console.log(this);
}

const obj = {
  logThis,
  logThisInArrow: () => console.log(this),
  logThisNested() {
    const nestedFunc = () => console.log(this);
    nestedFunc();
  },
};

obj.logThis();
obj.logThisInArrow();
obj.logThisNested();

// obj
// global
// obj
