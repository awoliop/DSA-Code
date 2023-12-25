class Node1 {
  constructor(val) {
    this.val = val;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node1(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    this.tail = this.tail.previous;
    this.tail.next = null;
    this.length--;
    return this;
  }
  unShift(val) {
    let newNode = new Node1(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }

    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }

    this.head = this.head.next;
    this.head.previous = null;
    this.length--;
    return this;
  }

  get(n) {
    if (this.length == 0 || n >= this.length) {
      return undefined;
    }

    if (!this.head) {
      return "EMPTY";
    }
    let counter = 0;
    let current = this.head;

    while (counter < n) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

// // let list1 = new DoublyLinkedList();
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);
// list1.pop();
// list1.pop();
// list1.unShift(0);
// list1.unShift(-1);
// list1.shift();
// list1.shift();
// list1.shift();
// list1.shift();
console.log(list1.get(2));

console.log(list1);
\