// const responsePromise = fetch("https://api.github.com/users/defytheflow");

// responsePromise
//   .then((response) => {
//     console.log(response);
//     const jsonPromise = response.json();
//     return jsonPromise;
//   })
//   .then((jsonData) => {
//     console.log(jsonData);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

function normalFunction() {
  console.log("before return");
  return 2;
  console.log("after return");
}

function* generatorFunction() {
  var x = 2;
  console.log("before yield %d", x);
  x += yield x;
  console.log("before 2 yield %d", x);
  x += yield x;
  console.log("before return %d", x);
  return x;
}

const gen = generatorFunction();

// console.log("main", gen.next());
// normalFunction();
// console.log("main", gen.next(3));
// console.log("main", gen.next(4));

async function fetchUser() {
  try {
    const response = await fetch("https://api.github.com/users/defytheflow");
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.error(err);
  }
}

function* fetchUserG() {
  try {
    const response = yield fetch("https://api.github.com/users/defytheflow");
    const json = yield response.json();
  } catch (err) {
    console.error(err);
  }
}

// run(fetchUserAndComments);

function run(genFunction) {
  const gen = genFunction();

  const promise = gen.next();
  return promise.value
    .then((response) => gen.next(response).value)
    .then((json) => gen.next(json).value)
    .catch((err) => gen.throw(err));
}

// await fetchUser();
// anotherFetchUser();

// run(fetchUser).then();

run(fetchUserG).then((user) => console.log(user));
fetchUser().then((user) => console.log(user));

function f() {
  return fetch("hello.com")
    .then((res) => res.json())
    .catch((e) => console.error(e))

    .then((d) => console.log(d))
    .catch((e) => console.error(e))
    .finally(() => console.log("finally"));
}
