const trampoline = (x) => {
  while (typeof x == "function") x = x();
  return x;
};

const lazy =
  (f) =>
  (...args) =>
  () =>
    f(...args);

function factorial(n) {
  const f = lazy((a, n) => (n == 0 ? a : f(n * a, n - 1)));
  return trampoline(f(1, n));
}

console.log(factorial(30000)); // Infinity
