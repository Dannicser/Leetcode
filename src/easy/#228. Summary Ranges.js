// https://leetcode.com/problems/summary-ranges/description/

function summaryRanges(arr) {
  const res = [];

  let left = 0;
  let right = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[right] === arr[right + 1] - 1) {
      right++;
    } else {
      res.push(concat(arr, left, right));
      right = right + 1;
      left = right;
    }
  }

  return res;
}

function concat(arr, l, r) {
  if (r === l) {
    return `${arr[l]}`;
  }

  return `${arr[l]}->${arr[r]}`;
}
