const obj = {
  logThis() {
    console.log(this);
  },
  logThis2() {
    function logThisInner() {
      console.log(this);
    }
    return logThisInner.apply(this);
  },
};

const { logThis, logThis2 } = obj;

logThis();
logThis2();
obj.logThis();
obj.logThis2();

// global
// global
// obj
// obj
