// built in js sortin function

let strings = ["cinema", "Addis", "zebra", "banana"];
// works perfectly
console.log(strings.sort());

let numbers = [2, 45, 1, 45, 66, 22, 76, 12];
/*

not quite the same!!.. NOT WORKING
Reason being the sort function is first converting the elements to string then converting
them againto thier respective unicode then sort the unicode which is not what we want!!
*/
console.log(numbers.sort());

// ➡️➡️➡️ so we should be doing the following!!

function numComparator(num1, num2) {
  return num1 - num2;
}
/*
 the sort built in  function accepts one comparator where if num1 -num2 is negative num1 comes first and if positive num2 comes first 
*/
console.log(numbers.sort(numComparator));

// ➡️➡️➡️ for reverse or deseendant order!!

function numCompaarator1(num1, num2) {
  return num2 - num1;
}

console.log(numbers.sort(numCompaarator1));

// for string if we want to sort based on thier length!

let string1 = [
  "fjsdfhjksfhjkdfksdh",
  "fsfbskfkse",
  "krjfheriu",
  "sdd",
  "sfhslkfhaslfksd",
];
function compareLengthUP(string1, string2) {
  return string1.length - string2.length;
}
// shortest ot longest!!
console.log(string1.sort(compareLengthUP));

function compareLengthDOWN(string1, string2) {
  return string2.length - string1.length;
}
// longest to shorest
console.log(string1.sort(compareLengthDOWN));

/* 
 ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
  ➡️➡️BUBBLE SORT⬅️⬅️     (THE LARGEST LEMENT WILL BUBBLE UPTO THE END TO THE ARRAY WITH EVERY ITERATION!!)
 ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
 */
function bubbleSort(arr) {
  // we are using a decrementing loop because we want to shrink the loop with every iteration as it will already be sorted at the end of the array(bubbling big values to the end!!
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([2, 45, 1, 45, 66, 22, 76, 12]));

// our bubble sort is to sort an unsorted set of data but if our data is an almost sorted we shoudl optimize it so we dont waste unnesecary energy!!..as follow

function bubbleSortOptimized(arr) {
  /*🔥🔥🔥
   we are using the noswap variable to check if there has been no swaps made and if we find an iteration where 
   no swap is made we will never have made any swaps with the iteration that comes up next to it !!
   🔥🔥🔥 
  */
  let noswap;
  for (let i = arr.length; i > 0; i--) {
    noswap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noswap = false;
      }
    }
    if (noswap) {
      break;
    }
  }
  return arr;
}
//
console.log(bubbleSortOptimized([2, 45, 1, 45, 66, 22, 76, 12]));

/*
USE THE BUBBLE SORT  IF YOU KNOW YOU DATA IS FARLY SORTED!!...IT IS POSSIBLY GOOD CANDIDATE!!
*/

function bubbleSort1(arr) {
  let noswap;
  let counter = 0;

  for (let i = arr.length; i > 0; i--) {
    noswap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swapping
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noswap = false;
      }
    }
    if (!noswap) counter++;
  }
  return arr;
}

console.log(bubbleSort1([2, 45, 1, 45, 66, 22, 76, 12]));
