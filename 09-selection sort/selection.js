function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    /* 
    we have finished the inner loop and know the index of the lowest element in arr, within the
    windows we are operating under!!!
     */

    /*
    swapping! (the if case is an optimization if we go through the array and found out that i is the index of 
    the element with the smallest value then there is no need to swap!!(woulf be the same value) )
    */
    if (i != minimum) [arr[i], arr[minimum]] = [arr[minimum], arr[i]];
  }
  return arr;
}

console.log(selectionSort([33, 4, 55, 6, 7, 88, 1]));

/*
// slightly different ways of doing the same thing !!
function selectionSort1(arr) {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    swap(arr, i, minimum);
  }
  return arr;
}

console.log(selectionSort1([33, 4, 55, 6, 7, 88, 1]));
*/
