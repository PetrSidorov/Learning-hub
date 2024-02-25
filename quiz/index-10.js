function logThis() {
  console.log(this);
}

const obj = {
  logThis,
  logThis2() {
    return logThis();
  },
  logThis3() {
    return obj.logThis();
  },
};

obj.logThis(); // obj
obj.logThis2(); // global
obj.logThis3(); // obj
