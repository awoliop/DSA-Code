// functiona to add from 1 to n

// ➡️ O(n)
function addupto1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
console.log(addupto2(23));
let t2 = performance.now();
console.log((t2 - t1).toFixed(2) + " Durtn");

// Anpther way of doing it (WITH BETTER PERFORMANCE!! )(more effiecient!)

// ➡️ O(1)
function addupto2(n) {
  return (n * (n + 1)) / 2;
}

let t3 = performance.now();
console.log(addupto1(23));
let t4 = performance.now();
console.log((t4 - t3).toFixed(2) + " Durtn");
//➡️➡️➡️performance tiime in millisecond!⬅️⬅️⬅️

// ➡️O(n) /since they are not nested!!
function twoForLoop(n) {
  for (let i = 0; i <= n; i++) {
    console.log("Hello");
  }
  for (let j = 0; (j = n); j++) {
    console.log("world");
  }
}

// ➡️ O(n^2) /since they are nested !!
// check it out with the size of n the combination produced is square of n
function twoForLoo1p(n) {
  let size = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(`size: ${size}: ${[i, j]}`);
      size++;
    }
  }
  console.log("....................");
}

twoForLoo1p(2);
twoForLoo1p(3);

/* ➡️ O(n)
we only have to worry about the n as o() notaiton is relevant to determine what
 happens as the input gets bigger the 5 only matters if n is smaller than five 
 with we are not intersted in*/
function logAtleasst5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
  console.log("..................");
}
logAtleasst5(10);

/*➡️O(1)
regardless of the size of n the loop in gonna be running only 5 time max which leave the options of the big o notsiton to 
O(1),O(2),O(3),O(4),O(5) which will be generalized to O(1)
 */
function logAtmost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
  console.log(".............");
}
logAtmost5(10);

// 🔥🔥SPACE COMPLEXITY🔥🔥

// ➡️O(1) space complexity
function sum1(n) {
  // 1(1 assignment)
  let total = 0;
  //   1 in the for loop
  for (let i = 0; i <= n; i++) {
    // there is no mroe memory being provieded here as it is  added up to the already existing memory!!
    total += i;
  }
  return total;
}

// ➡️O(n) space complexity
function double(arr) {
  // 1 (array being declared)
  let newarr = [];
  //  1  another one being declared
  for (let i = 0; i < arr.length; i++) {
    //➡️O(n): these time, with the size of the original array the newArr size is gonna expand and be stored in new memory that grows linearly
    newarr.push(arr[i] * 2);
  }
  return newarr;
}

console.log(double([1, 2, 3]));

function divider(n) {
  let tostring = n.toString();
  let checker = [];
  let sum = 0;
  // let tonumber;
  for (let i = 0; i < tostring.length; i++) {
    let tonumber = parseInt(tostring[i]);
    if (n % tonumber == 0) {
      checker.push(1);
    } else {
      checker.push(0);
    }
  }
  // console.log(checker);

  if (checker.includes(0)) {
    return checker + ": can not be divided!!";
  } else {
    return checker + ": can  be divided ";
  }
}

console.log(divider(233));
