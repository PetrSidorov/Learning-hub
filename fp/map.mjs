// you can only use expressions (can only use return statement);
// you can not mutate parameters

function map([head, ...rest], fn) {
  return head == undefined ? [] : [fn(head), ...map(rest, fn)];
}

console.log(map([1, 2, 3], (x) => x + 1)); // []

function repeat(str, count) {
  return count == 0 ? "" : str + repeat(str, count - 1);
}

// repeat str count = if count = 0 then "" else str <> repeat str count - 1

// repeat str count = match count
//  | case 0 -> ""
//  | _ -> str + repeat str count - 1

console.log(repeat("+", 5));
// +++++

// repeat("+", 1) [0x5] ""
// repeat("+", 2) [0x4] "+"
// repeat("+", 3) [0x3] "++"
// repeat("+", 4) [0x2] "+++"
// repeat("+", 5) [0x1]
// main() [0x0]
