class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const createStack = () => {
  const stack = [];
  return {
    pushToStack: (val) => {
      stack.push(val);
    },
    popStack: () => {
      stack.pop();
    },
    get stackTop() {
      return stack.at(-1);
    },
    get stackEmpty() {
      return stack.length === 0;
    },
    stack,
  };
};

const depthFirstValues = (root) => {
  // This down here won't work
  const { pushToStack, popStack, stackEmpty, stackTop, stack } = createStack();
  pushToStack(root.val);
};

module.exports = {
  depthFirstValues,
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

depthFirstValues(a);
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
