const { pipe, abort } = renderToPipeableStream({
  callback: function callback() {
    const body = new PassThrough();
    pipe(body);
  },
});

// callback();

// function renderToPipeableSteram(objecct) {
///  object.callback();
//     function pipe() {
//         // object.xallback();
//     }

//     function abort() {
//     }

//     return { pipe, abort };
// }

// useInsertionEffect();

/**
 *
 * @param x {number}
 * @param y {number}
 * @returns number
 */
function add(x, y) {
  return x + y;
}

const x = add("hi", "Hey");

// let smth;

if (x) {
  var smth = 0;
} else {
  var smth = 7;
}

const x = function() {
    try {
        return someThatMayTHrow():
    } catch {
        return null;
    }
}();

let x;

try {
    x = someThatMayThrow();
} catch {
    x = null;
}