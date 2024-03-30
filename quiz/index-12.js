function logThis() {
  console.log(this);
}

const obj1 = {
  foo: logThis,
  bar: () => logThis(),
  baz() {
    logThis();
  },
  quz() {
    // this -> obj2
    logThis.call(this);
  },
};

const obj2 = { ...obj1, foo2: () => obj1.foo() };

for (const key in obj2) {
  obj2[key](); // obj2.quz()
}

// obj2
// global
// global
// obj2
// obj1
