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
console.log(instructor.hasOwnProperty("firstname"));

// ARRAY(WHEN ARE THEY SLOW)
function powerTester(n, base) {
  let multiple = 1;
  for (let i = base; i <= n; i + base) {
    if (multiple < n) {
      multiple *= i;
    } else if (multiple == n) {
      return true + ` it can be divied by ${base} `;
    } else {
      return false + ` it can not be divied by ${base} `;
    }
  }
}
console.log("......................");
console.log(powerTester(81, 3));

var isPowerOfFour = function (n) {
  let multiple = 1;
  while (multiple <= n) {
    multiple *= 4;
    if (multiple == n) {
      return true;
    } else if (multiple > n) {
      return false;
    }
  }
};

console.log(isPowerOfFour(16));
// ......................
