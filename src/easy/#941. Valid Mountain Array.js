// https://leetcode.com/problems/valid-mountain-array/

function validMountainArray(arr) {
  if (arr.length <= 2) {
    return false;
  }

  let i = 0;
  let j = arr.length - 1;

  while (arr[i] < arr[i + 1]) {
    i++;
  }

  while (arr[j] < arr[j - 1]) {
    j--;
  }

  if (i === arr.length - 1 || j === 0) {
    return false;
  }

  return i === j;
}
