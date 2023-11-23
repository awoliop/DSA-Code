// ➡️ recurrsion function are built in a call stack where the first in to the stack  is executed last

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
