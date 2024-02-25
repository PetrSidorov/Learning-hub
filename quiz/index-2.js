async function asyncFunction() {
  console.log(1);
  new Promise(() => console.log(2));
  await new Promise((res) => {
    setTimeout(() => console.log(3), 0);
    res();
  });
  return undefined;
}

new Promise((res) => {
  console.log(4);
  (async () => {
    console.log(5);
    await asyncFunction();
    console.log(6);
  })();
  res();
}).then(() => console.log(7));

console.log(8);

// 4, 5, 1, 2, 8, 7, 6, 3
