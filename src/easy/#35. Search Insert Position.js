// https://leetcode.com/problems/search-insert-position/description/

function searchInsert(arr, n) {
  arr.push(Infinity);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }

    if (arr[i] > n) {
      return i;
    }
  }
}

function searchInsert() {
  for (let i = 0; i < arr.length; i++) {
    if (n <= arr[i]) {
      return i;
    }
  }

  return arr.length;
}
