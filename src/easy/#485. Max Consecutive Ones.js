// https://leetcode.com/problems/max-consecutive-ones/description/

function findMaxConsecutiveOnes(arr) {
  let l = 0;
  let r = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      r++;
    } else {
      max = Math.max(max, r - l);
      l = r;
      r++;
      l++;
    }
  }

  return Math.max(max, r - l);
}
