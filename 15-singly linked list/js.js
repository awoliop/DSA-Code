class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let previous = this.head;
    let current = this.head;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    let del = current;
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return [this, del];
  }

  unShift(val) {
    let newNode1 = new Node(val);
    if (!this.head) {
      this.head = newNode1;
      this.tail = this.head;
      this.length++;
    }

    newNode1.next = this.head;
    this.head = newNode1;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let del = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return [this, del];
  }
  get(n) {
    if (this.length == 0 || n >= this.length) {
      return undefined;
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

let list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.unShift(0);
// list.shift();
// list.shift();
// list.shift();
// console.log(list.get(2));
console.log(list);
