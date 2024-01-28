function checker(nums, k) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash.hasOwnProperty(nums[i]) && Math.abs(i - hash[nums[i]]) <= k) {
      return true;
    }
    hash[nums[i]] = i;
  }
  return false;
}

console.log(checker([1, 2, 3, 1, 4, 2, 3], 5));

// this is the same with slight difference with the use of Math.max()
function maxSubArray(nums, k) {
  let j = 0;
  let sum = 0;
  let maxAveg = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (i >= k - 1) {
      maxAveg = Math.max(sum / k, maxAveg);
      sum -= nums[j];
      j++;
    }
  }
  return maxAveg;
}

console.log(maxSubArray([1, 2, 3, 4, 5, 6, 7], 3));

function divisioncheckre(n, k) {
  let numString = n.toString();
  let arr = numString.split("");
  let former = "";
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    former += arr[i];
    if (i >= k - 1) {
      if (n % parseInt(former) == 0) {
        counter++;
        former.substring(1);
        // ➡️➡️ Another option
        // former.split("");
        // former.shift();
        // former.join("");
      }
    }
  }

  return counter;
}

console.log(divisioncheckre(430043, 2));

