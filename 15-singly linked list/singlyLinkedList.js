class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // adds to the last(to the end)!
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
      this.length++;
    }
    return this;
  }
  //   deletes last element(from the end!)
  pop() {
    let del;
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let previous = this.head;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    // i am adding this so we now what element we are deleting
    del = current;
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return [del, this];
  }
  //   deletes from begning of the linked list
  shift() {
    if (!this.head) {
      return undefined;
    }

    // if you wanted to keep the del node
    let del = this.head;
    this.head = this.head.next;
    this.length--;
    /* this serves if the linked list has only one element and as it already 
    has benn decremented we would put the codnition we have put in there 
    and procede as follow*/
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return [del, this];
  }
  //   Adds to the begning of the linked list
  unshift(val) {
    let newNode1 = new Node(val);
    if (!this.head) {
      this.head = newNode1;
      this.tail = this.head;
      /*
    NO NEED TO INCREMENT ➡️ HERE⬅️    
    we are incrementing down there for the whole function
    */
    }
    // else {
    /*🔥🔥🔥🔥🔥 we have to put it in "else" because for when the linkedlist is empty it will execute
      the if condition above and then it goes and do the rest, there by updating the next of
      newNode to itself rather than a null!!....
      which will be problematic as we will never have a tail that is pointing to null ever as we keep unshifting!!!
      but ofcourse will be fixed if we pushed node instead of unshift!!
      🔥🔥🔥🔥🔥
       */
    newNode1.next = this.head;
    this.head = newNode1;
    // }

    this.length++;
    return this;
  }
  /* 
    ➡️➡️➡️ Although it is advised to use an array to acces a node through index/ we can also produce the same functionality
    it is not indexed with by nature but we can add a counter us below so we know what position we are on!
    as it is not indexed natureally we can only traverse throught he whole list(which is why we chose Array for random access(for nee for travrse there!!))
    ⬅️⬅️⬅️  
   */
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    if (counter == index) {
      return current.val;
    }
  }
}

let test = new SinglyLinkedList();
test.push("ONE");
test.push("TWO");
test.push("THREE");
test.push("FOUR");
// test.unshift("ZERO");
// test.push("one");

// test.pop();
// test.pop();
// to test if it deletes the last element!!
// test.pop();

// test.shift();
// test.shift();
console.log(test);
console.log(test.get(2));
