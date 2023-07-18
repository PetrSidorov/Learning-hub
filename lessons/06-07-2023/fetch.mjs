// Promise
// https://api.github.com/users/PetrSidorov

// var responsePromise = fetch("https://api.github.com/users/PetrSidorov/repos");

// var jsonPromise = responsePromise.then(
//   function onfulfilled(response) {
//     console.log(response);
//     var jsonPromise = response.json();
//     return jsonPromise;
//   },
//   function onrejected(err) {
//     // Some network error. No internet connection for example.
//   }
// );

// jsonPromise.then(
//     function onfulfilled(data) {
//         console.log(data);
//     }
// )

// Short promise
// fetch("https://api.github.com/users/PetrSidorov/repos")
//   .then(
//     function (response) {
//       return response.json();
//     },
//     function (err) {
//       // Some network error. No internet connection for example.
//     }
//   )
//   .then(function (data) {
//     console.log(data);
//   });

// 
try {
    // var data = await fetch("https://api.github.com/users/PetrSidorov/repos").then(res => res.json())
    var data = await (await fetch("https://api.github.com/users/PetrSidorov/repos")).json();
    // var data = await response.json();
    console.log(data);
} catch (err) {
    console.error(err);
    // Some network error. No internet connection for example.
} finally {

}

async function someAsyncFunction() {
    return somePromiseCreatingFunction();
}

async function someANotherAsyncFunction() {
    var res = await somePromiseCreatingFunction();
    return res.done;
}


// a() |> b() |> c() |> d()

d(c(b(a())))

var fn = a |> b |> c |> d
fn(arg);

function foo() {
    fetch();
} // undefined

async function foo() {
    fetch();
} // Promise<undefined>

fetch(someUrl)
    .then(handleResponse, handleResponseError)
    .then(fetchOtherInfo, handleFetchOtherInfoError)
    .then(doSomethingElse)
    .catch(handleErrors)

// try {
    // var res = ;
    // var res2 = ;
    // var res3 = await fetchOtherInfo(await handleResponse(await fetch(someUrl)));
// }