// ➡️ Recurrsion function are built in a call stack where the first in to the stack  is executed last

function factorial1(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial1(n - 1);
}

console.log(factorial1(4));

// TWO WAYS OF IMPLEMENTATION (ARRAY AND STACK[BETTER ONE ])

// ➡️Array
// (array 1)(using push and pop)
let stack = [];

stack.push("google");
console.log(stack);
stack.push("facebook");
console.log(stack);
stack.push("instagram");
console.log(stack);

console.log(stack);
// ➡️➡️LAST IN FIRST OUT(LIFO PRINCIPLE)⬅️⬅️
stack.pop();
console.log(stack);

stack.pop();
console.log(stack);

stack.pop();
console.log(stack);

// (array 2)(using UNSHIFT AAND SHIFT(NOt preffered as it has a worse time complexity!!))

let stack1 = [];

stack1.unshift("amazon");
console.log(stack1);
stack1.unshift("bloomberg");
console.log(stack1);
stack1.unshift("AliExpress");
console.log(stack1);

stack1.shift();
console.log(stack1);

stack1.shift();
console.log(stack1);

stack1.shift();
console.log(stack1);

//➡️➡️➡️BUIDLING OUR WON STACK FROM SCRATCH (WITH SINGLY LINKED LIST)

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
      this.length++;
    }
    return this;
  }
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length == 1) {
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      console.log(temp);
      return this;
    }

    let current = this.head;
    let previous = this.head;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;

    console.log(current);
    return current;
  }
}

let newstack = new Stack();

newstack.push(1);
newstack.push(2);
newstack.push(3);
newstack.push(4);
newstack.pop();
newstack.pop();
newstack.pop();
newstack.pop();
console.log(newstack);

/*
🔥🔥🔥 But using push and pop in singly linked list  as they are understood in array is not preffered as we have to iterate 
through the entire list to find  the element second to last so we should be using shift and 
unshift as they are understood in array but with singly linked list🔥🔥🔥 
*/

class Node1 {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class STACKSll {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /*
  ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ 
   we aere calling unshift push as it is what we are doing with the linked list conceptually, 
  we can only say unshift and push are idfferent if there is a concept of indexing like in array, but with sinly
   linked list there is no one so push is more conceptually right although we are unshifting i it where an array
  ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️ 
   */
  // changing terminologies of head and taail to first anf last as they are inheritaly characterization of linkedlist while we are tryint o build a stack there is a first in and last out concept

  push(val) {
    let node = new Node1(val);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
      this.length++;
      console.log(this.length);
      return this;
    }

    node.next = this.first;
    this.first = node;
    this.length++;
    console.log(this.length);
    return this;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    let del = this.first;

    this.first = this.first.next;
    this.length--;
    if (this.length == 0) {
      this.first = null;
      this.last = null;
    }
    console.log(del.data);
    return this;
  }
}

let newstack1 = new STACKSll();

console.log(newstack1.push("one"));
console.log(newstack1.push("two"));
console.log(newstack1.push("three"));
console.log(newstack1.push("four"));
console.log(newstack1.push("five"));
console.log(newstack1.pop());
console.log(newstack1.pop());
console.log(newstack1.pop());
// console.log(newstack1.pop());
// console.log(newstack1.pop());

// ➡️➡️➡️➡️➡️➡️STACK WITH DOUBLY LINKED LIST

class Node21 {
  constructor(val) {
    this.data = val;
    this.next = null;
    this.prev = null;
  }
}

class StackDLL {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node21(val);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
      this.length++;
      console.log(this.length);
      return this;
    }

    this.first.prev = node;
    node.next = this.first;
    this.first = node;
    this.length++;
    console.log(this.length);
    return this;
  }
  pop() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.length == 1) {
      temp = this.first;
      this.first = null;
      this.last = null;
      this.length--;
      console.log(temp);
      return this;
    }
    this.first = this.first.next;
    this.first.prev = null;
    this.length--;

    console.log("%%%%%%%%");
    console.log(temp);
    return this;
  }
}

let newStackDLL = new StackDLL();

console.log(newStackDLL.push(1));
console.log(newStackDLL.push(2));
console.log(newStackDLL.push(3));
console.log(newStackDLL.push(4));
console.log(newStackDLL.push(5));
console.log(newStackDLL.pop());
console.log(newStackDLL.pop());
console.log(newStackDLL.pop());
// console.log(newStackDLL.pop());
// console.log(newStackDLL.pop());
// console.log(newStackDLL.pop());

//➡️➡️QUEUE(FIFO PRINCIPLE)⬅️⬅️⬅️

// 2 ways to implement queue like stack (Array and sinly linked lsit)

// ➡️Array(A)

let queue1 = [];

console.log(queue1.push(1));
console.log(queue1.push(2));
console.log(queue1.push(3));
console.log(queue1.push(4));
console.log(queue1.push(5));
console.log(queue1.shift());
console.log(queue1.shift());
console.log(queue1.shift());
console.log("........");
// OR
// ➡️ Array(B)

let queue2 = [];

console.log(queue2.unshift(1));
console.log(queue2.unshift(2));
console.log(queue2.unshift(3));
console.log(queue2.unshift(4));
console.log(queue2.unshift(5));
console.log(queue2.pop());
console.log(queue2.pop());
console.log(queue2.pop());

// ➡️➡️➡️ singly Linked List
class Node11 {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class QueueSLL {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  add(val) {
    let node = new Node11(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
      this.length++;
      console.log(this.length);
      return this;
    }
    this.last.next = node;
    this.last = node;
    this.length++;
    console.log(this.length);
    return this;
  }
  del() {
    let del;
    if (!this.first) {
      return null;
    }
    if (this.length == 1) {
      let temp1 = this.first;
      this.first = null;
      this.last = null;
      this.length--;
      console.log(temp1);
      return this;
    }
    let temp = this.first;
    this.first = this.first.next;
    this.length--;
    console.log(temp);
    return this;
  }
}

let newQueue = new QueueSLL();

console.log(newQueue.add("one"));
console.log(newQueue.add("two"));
console.log(newQueue.add("three"));
console.log(newQueue.add("four"));
console.log(newQueue.add("five"));

console.log(newQueue.del());
console.log(newQueue.del());
console.log(newQueue.del());
// console.log(newQueue.del());
// console.log(newQueue.del());
// console.log(newQueue.del());

// ➡️➡️➡️➡️➡️➡️QUEUE WITH DOUBLY LINKED LIST

class Node23 {
  constructor(val) {
    this.data = val;
    this.next = null;
    this.prev = null;
  }
}

class QueueDLL {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  add(val) {
    let node = new Node23(val);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
      this.length++;
      console.log(this.length);
      return this;
    }
    this.last.next = node;
    node.prev = this.last;
    this.last = node;
    this.length++;
    console.log(this.length);
    return this;
  }

  del() {
    if (!this.first) {
      return null;
    }
    if (this.length == 1) {
      let temp3 = this.first;
      this.first = null;
      this.tail = null;
      this.length--;
      console.log(temp3);
      return this;
    }
    let temp2 = this.first;
    this.first = this.first.next;
    this.first.prev = null;
    this.length--;
    console.log(temp2);
    return this;
  }
}

let newQueueDLL = new QueueDLL();

console.log("^^^^^^^^^^^^^^^^^^^^^^^^");

console.log(newQueueDLL.add("first"));
console.log(newQueueDLL.add("second"));
console.log(newQueueDLL.add("third"));
console.log(newQueueDLL.add("fourth"));
console.log(newQueueDLL.add("fifith"));
console.log(newQueueDLL.del());
console.log(newQueueDLL.del());
console.log(newQueueDLL.del());
// console.log(newQueueDLL.del());
// console.log(newQueueDLL.del());
// console.log(newQueueDLL.del());

class Node22 {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class QueueSLL2 {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(val) {
    let node = new Node22(val);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
      this.length++;
      console.log(this.length);
      return this;
    }

    this.last.next = node;
    this.last = node;
    this.length++;
    console.log(this.length);
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    this.first = this.first.next;
    this.length--;
    if (this.length == 0) {
      this.first = null;
      this.last = null;
      this.length--;
    }
    console.log(temp);
    return this;
  }
}

let newQueuesll = new QueueSLL2();

console.log("*******************");
console.log(newQueuesll.enqueue("one"));
console.log(newQueuesll.enqueue("two"));
console.log(newQueuesll.enqueue("three"));
console.log(newQueuesll.enqueue("four"));
console.log(newQueuesll.enqueue("five"));
console.log(newQueuesll.dequeue());
console.log(newQueuesll.dequeue());
console.log(newQueuesll.dequeue());

class Node44 {
  constructor(val) {
    this.data = val;
    this.next = null;
    this.prev = null;
  }
}

class QueueDll {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    let node = new Node44(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
      this.length++;
      console.log(this.length);
      return this;
    }
    node.next = this.first;
    this.first.prev = node;
    this.first = node;
    this.length++;
    console.log(this.length);
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.length == 1) {
      this.first = null;
      this.last = null;
      this.length--;
      return this;
    }
    let temp = this.last;
    this.last = this.last.prev;
    this.last.next = null;
    this.length--;
    console.log(temp);
    return this;
  }
}
let newQ = new QueueDll();
console.log("***************8");
console.log(newQ.enqueue("one"));
console.log(newQ.enqueue("two"));
console.log(newQ.enqueue("three"));
console.log(newQ.enqueue("four"));
console.log(newQ.enqueue("five"));

console.log(newQ.dequeue());
console.log(newQ.dequeue());
// console.log(newQ.dequeue());
// console.log(newQ.dequeue());
// console.log(newQ.dequeue());
// console.log(newQ.dequeue());
const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
