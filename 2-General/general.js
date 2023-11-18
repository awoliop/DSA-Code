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
