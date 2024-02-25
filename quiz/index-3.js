(async () => {
  const asyncFunc = async () => "asyncFunc";

  const promise = new Promise((res) => {
    console.log("promise");
  }).then(() => console.log("then"));

  console.log("async body");

  queueMicrotask(() => {
    console.log("queueMicrotask");
  });

  const results = await Promise.all([asyncFunc(), promise]);

  return results;
})();

console.log("script");

// "promise", "async body", "script", "queueMicrotask"
