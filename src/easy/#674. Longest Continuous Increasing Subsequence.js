// https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/

function findLengthOfLCIS(arr) {
  let l = 0;
  let r = 0;
  let max = 0;

  while (r < arr.length) {
    if (arr[r] < arr[r + 1]) {
      r++;
    } else {
      max = Math.max(max, r - l);
      l = r;
      r++;
      l++;
    }
  }

  return max + 1;
}
