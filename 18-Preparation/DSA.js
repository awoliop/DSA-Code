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

function divisorSubstring(num, k) {
  let arr = num.toString();
  let digits = arr.split("");
  let counter = 0;
  let windowStart = 0;
  let former = "";
  for (let windowEnd = 0; windowEnd < digits.length; windowEnd++) {
    former += digits[windowEnd];
    if (windowEnd >= k - 1) {
      // convert former to number under numbered varibale
      let numbered = parseInt(former);
      if (num % numbered === 0) {
        counter++;
      }
      // split former into array and remove first element
      let formerArr = former.split("");
      formerArr.shift();
      former = formerArr.join("");
      // console.log(former);
    }
  }
  return counter;
}

console.log(divisorSubstring(430043, 2));
