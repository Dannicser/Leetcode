// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

function findDisappearedNumbers(arr) {
  arr = arr.sort((a, b) => a - b);

  let n = arr.length;
  const res = [];

  while (n >= 1) {
    if (binarySearch(arr, n, 0, arr.length) < 0) {
      res.push(n);
    }

    n--;
  }

  return res;
}

function binarySearch(arr, target, start, end) {
  const middleIndex = Math.floor((start + end) / 2);

  if (arr[middleIndex] === target) {
    return middleIndex;
  }

  if (start >= end) {
    return -1;
  }

  if (arr[middleIndex] > target) {
    return binarySearch(arr, target, start, middleIndex - 1);
  } else {
    return binarySearch(arr, target, middleIndex + 1, end);
  }
}
