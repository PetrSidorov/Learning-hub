function add(a) {
  return function (b) {
    return a + b;
  };
}

function mul(a) {
  return function (b) {
    return a * b;
  };
}

function power(n) {
  return function (a) {
    return a ** n;
  };
}

function div(a) {
  return function (b) {
    return b / a;
  };
}

var addTwo = add(2);
var mulByFour = mul(4);
var square = power(2);
var divByTwo = div(2);

// function addTwo(a) {
//   return a + 2;
// }

// function mulByFour(a) {
//   return a * 4;
// }

// function square(a) {
//   return a ** 2;
// }

// function divByTwo(a) {
//   return a / 2;
// }

var res = divByTwo(square(mulByFour(addTwo(3))));
console.log(res);

function apply(a, fn) {
  return fn(a);
}

// var fns = [addTwo, mulByFour, square, divByTwo];
// var res2 = fns.reduce((acc, fn) => fn(acc), 3);
// console.log(res2);

// var fns2 = [divByTwo, square, mulByFour, addTwo];
// var res3 = fns2.reduceRight((acc, fn) => fn(acc), 3);
// console.log(res3);

function tranduce() {
    
}

filter()
filter()
map()
map()
reduce()

function compose(initialValue, ...fns) {
  return fns.reduceRight((acc, fn) => fn(acc), initialValue);
}

function pipe(initialValue, ...fns) {
  return fns.reduce((acc, fn) => fn(acc), initialValue);
}

console.log(compose(3, div(2), power(2), mul(4), add(2)));
console.log(pipe(3, addTwo, mulByFour, square, divByTwo));

// 3 |> addTwo |> mulByFour |> square |> divByTwo

// apply(
//     apply(
//         apply(
//             apply(
//                 3,
//                 addTwo
//             ),
//             mulByFour,
//         ),
//         square,
//     ),
//     divByTwo
// );

function flow(..fns) {
    return function (arg) {
        return fns.reduce((acc, fn) => fn(acc), arg);
    }
}

// fp-ts
