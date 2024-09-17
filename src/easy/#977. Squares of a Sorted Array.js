// https://leetcode.com/problems/squares-of-a-sorted-array/description/

function sortedSquares(arr) {
  const res = [];

  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    if (Math.abs(arr[r]) > Math.abs(arr[l])) {
      res.push(arr[r] ** 2);
      r--;
    } else {
      res.push(arr[l] ** 2);
      l++;
    }
  }

  return res;
}

function sortedSquares(arr) {
  for (let item of arr) {
    res.push(item ** 2);
  }

  return res.sort((a, b) => a - b);
}
