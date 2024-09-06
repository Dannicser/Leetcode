// https://leetcode.com/problems/summary-ranges/description/

// два указателя
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

// с одной переменной
function summaryRanges(arr) {
  const res = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      count > 0 ? res.push(`${arr[i] - count}->${arr[i]}`) : res.push(`${arr[i]}`);
      count = 0;
    } else {
      count++;
    }
  }

  return res;
}
