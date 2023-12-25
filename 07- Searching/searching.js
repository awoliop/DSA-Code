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

// ➡️➡️  Average and worse cases: O(n) and  best case scenario: o(1) :) whne we a=have found it right away!!

function LinearSearch1(arr, string) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == string) return i;
  }
  return -1;
}

console.log(LinearSearch1(usStates, "Wyoming"));
console.log(LinearSearch1(usStates, "Awelker"));
console.log(LinearSearch1(usStates, "Virginia"));

function BinarySearch1(arr, n) {
  //   arr = arr.sort();

  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] > n) {
      right = middle - 1;
    }
    if (arr[middle] < n) {
      left = middle + 1;
    }
    if (arr[middle] == n) {
      return middle;
    }
  }
  return -1;
}

console.log("*****************");

console.log(BinarySearch1(usStates, "Wyoming"));
console.log(BinarySearch1(usStates, "Awelker"));
console.log(BinarySearch1(usStates, "Virginia"));
console.log(BinarySearch1(usStates, "Arkansas"));

function binarySearch2(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== n && left <= right) {
    if (arr[middle] > n) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  if (arr[middle] == n) {
    return middle;
  }
  return -1;
}
console.log(">>>>>>>>>>>>>");
console.log(binarySearch2(usStates, "Awelker"));
console.log(binarySearch2(usStates, "Wyoming"));

function binarySearchRedo(arr, string) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== string && start <= end) {
    if (arr[middle] < string) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] == string ? middle : -1;
  //   same thing in ternary above!!
  //   if (arr[middle] == string) {
  //     return middle;
  //   }
  //   return -1;
}
console.log("....................");
console.log(binarySearchRedo(usStates, "Awelker"));
console.log(binarySearchRedo(usStates, "Wyoming"));
console.log(binarySearchRedo([8, 7, 7], 7));

// ➡️➡️➡️Naive String Search!!⬅️⬅️⬅️⬅️

// counting how many times a substring existes in a bigger string

function NaiveSearch(long, short) {
  let counter = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] != long[i + j]) {
        break;
      }
      if (j == short.length - 1) {
        counter++;
      }
    }
  }
  return counter;
}

console.log(NaiveSearch("lollolseelol", "lol"));
