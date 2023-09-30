// you can only use expressions (can only use return statement);
// you can not mutate parameters

function filter([x, ...xs], cb) {
  return x == undefined ? [] : cb(x) ? [x, ...filter(xs, cb)] : filter(xs, cb);
}

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = filter(words, (word) => word.length > 6);
console.log(result);
// const getMax = (a, b) => Math.max(a, b);
// console.log([1, 100, 150].reduce(getMax, 200));
