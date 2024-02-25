type Promiseable<T> = {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (reason: any) => void;
};

type PromiseFactory<T> = () => Promiseable<T>;

function explodePromise<T>(): Promiseable<T> {
  let resolve, reject;

  let promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return {
    promise,
    resolve,
    reject,
  };
}

const { promise, resolve, reject } = explodePromise<number>();

setTimeout(resolve, 1000, 25);

promise.then(console.log);
