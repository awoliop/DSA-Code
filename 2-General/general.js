// OBJECTS!!

let instructor = {
  firstname: "Awelker",
  isIntructor: true,
  lastname: "Ibrahim",
};
// ➡️O(n) time complexity
console.log(Object.keys(instructor));
console.log(Object.entries(instructor));
console.log(Object.values(instructor));
// tellsus if such property exists in the object with boolean value!!.

/**
 * The time complexity of the code instructor.hasOwnProperty("firstname") is O(1) because it directly checks if the property "firstname" exists in the instructor object. It does not depend on the size of the object or the number of properties it has.
 */
console.log(instructor.hasOwnProperty("firstname"));

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

// ➡️O(n) time complexity
console.log(arr1.concat(arr2));

const arr3 = [1, 2, 3, 4, 5];

// ➡️O(n) time complexity
console.log(arr3.slice(1));
console.log(arr3.slice(2, 4));

const arr4 = [1, 2, 3, 4, 5];

/* 
1 represent the index at which modification will start
0 the number of elements to be removed
6 the element to be added at index 1
*/

// ➡️O(n) time complexity
console.log(arr4.splice(3, 1, 6));
console.log(arr4);

const arr5 = [1, 2, 3, 4, 5];

// ➡️O(1) time complexity
console.log(arr5.push(6));
console.log(arr5);
// ➡️O(1) time complexity
console.log(arr5.pop());
console.log(arr5);

const arr6 = [1, 2, 3, 4, 5];
// ➡️O(n) time complexity
console.log(arr6.shift());
console.log(arr6);

const arr7 = [1, 2, 3, 4, 5];
// ➡️O(n) time complexity
console.log(arr7.unshift(8));
console.log(arr7);

function fizzzbuzz(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 == 0) {
      arr[i] = "FizzBuzz";
    } else if (arr[i] % 3 === 0) {
      arr[i] = "Fizz";
    } else if (arr[i] % 5 === 0) {
      arr[i] = "Buzz";
    }
  }
  return arr;
}

console.log(fizzzbuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
