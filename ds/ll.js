var tail = { value: 5, next: null };

var head = {
  value: 1,
  next: {
    value: 2,
    next: { value: 3, next: { value: 4, next: tail } },
  },
};

head = {
  value: 0,
  next: head,
};

tail.next = {
  value: 6,
  next: null,
};

tail = tail.next;

var curr = head;
while (curr) {
  console.log(curr.value);
  curr = curr.next;
}

class SinglyLinkedList {
  #length = 0;
  #head = null;
  #tail = null;

  //   constructor() {
  //     this.#length =0;
  //     this.#head = null;
  //     this.#tail = null;
  //   }

  toString() {
    console.log(this.#head.value, this.#tail.value);
  }

  append(value) {
    this.#length += 1;
    var node = { value, next: null };

    if (!this.#tail) {
      this.#head = this.#tail = node;
      return;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }
  }

  prepend(value) {}

  shift() {}

  pop() {}
}

var sll = new SinglyLinkedList();

sll.append(1);
sll.append(2);

console.log(sll.toString());

sll.prepend(2);
sll.append(3);
sll.prepend(4);

console.log(sll.toString());

sll.shift();
sll.pop();

console.log(sll.toString());
