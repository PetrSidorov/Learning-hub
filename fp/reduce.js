function reduce([head, ...tail], cb, initialValue) {
  return head == undefined
    ? initialValue
    : reduce(tail, cb, cb(initialValue, head));
}

// reduce(10)
// reduce(9)
// reduce(8)
// reduce(7)
