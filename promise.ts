interface MyIterable<T> {
  [Symbol.iterator](): MyIterator<T>;
}

type MyIterator<T> = {
  next(): MyIteratorResult<T>;
};

type MyIteratorResult<T> = {
  value: T;
  done: boolean;
};

function f(a: MyIterable<number>) {
  for (const v of a) {
    // do something with v
    console.log("f", v);
  }
}

function ff(aa: MyIterable<number>) {
  const iter = aa[Symbol.iterator]();
  while (true) {
    const result = iter.next();
    if (result.done) {
      break;
    }
    const v = result.value;
    console.log("ff", v);
    // do something with v
  }
}

f([1, 2, 3]);
ff([1, 2, 3]);
ff(
  (function* () {
    yield 1;
    yield 2;
    yield 3;
  })()
);
ff(new Set([1, 2, 3]));
ff({
  [Symbol.iterator]() {
    return {
      value: 1,
      next() {
        if (this.value === 4) return { done: true };
        else return { value: this.value++, done: false };
      },
    };
  },
});

class MyPromise {
  static all<T extends unknown[] | []>(
    values: T
  ): Promise<{ [P in keyof T]: Awaited<T[P]> }> {
    return new Promise((resolve, reject) => {
      const resolvedValues = [] as { [P in keyof T]: Awaited<T[P]> };
      let numberOfResolvedValues = 0;
      let nextIndex = 0;

      for (const maybeThenableValue of values) {
        const i = nextIndex;
        nextIndex++;

        if (
          typeof maybeThenableValue == "object" &&
          maybeThenableValue != null &&
          "then" in maybeThenableValue &&
          typeof maybeThenableValue.then == "function"
        ) {
          //
          maybeThenableValue
            .then(function onResolved(resolvedValue) {
              resolvedValues[i] = resolvedValue;
              numberOfResolvedValues++;
              if (numberOfResolvedValues == values.length) {
                resolve(resolvedValues);
              }
            })
            .catch(function onRejected(reason) {
              reject(reason);
            });
        } else {
          resolvedValues[i] = maybeThenableValue;
        }
      }

      if (nextIndex == 0) {
        // empty iterable
        resolve(resolvedValues);
      }
    });
  }
}

async function wait(ms) {
  await new Promise((res) => setTimeout(res, ms));
}

async function one() {
  await wait(3000);
  return 1;
}

async function hello() {
  await wait(4000);
  return "hello";
}

const p = Promise.all([one(), hello()]);
const pp = MyPromise.all([one(), hello()]);

pp.then(console.log);
type A = unknown[] | [];
type T = Promise<string>;
type TT = Awaited<T>;
type MyAwaited<T> = T extends Promise<infer U> ? U : never;
type TTTT = MyAwaited<Promise<number>>;
