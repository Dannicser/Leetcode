// https://leetcode.com/problems/minimum-size-subarray-sum/description/

function minSubArrayLen(arr, target) {
  let minLength = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let right = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[right];
    right++;

    while (sum >= target) {
      minLength = Math.min(minLength, right - left);
      sum = sum - arr[left];
      left++;
    }
  }

  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
}

console.log(minSubArrayLen([5, 1, 3, 5, 10, 7, 4, 9, 2, 8], 15));
