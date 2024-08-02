// https://leetcode.com/problems/binary-search/

function binarySearch(arr, target, start, end) {
  const middleIndex = Math.floor((start + end) / 2);

  if (start > end) {
    return -1;
  }

  if (arr[middleIndex] === target) {
    return middleIndex;
  }

  if (target > arr[middleIndex]) {
    return binarySearch(arr, target, middleIndex + 1, end);
  } else {
    return binarySearch(arr, target, start, middleIndex - 1);
  }
}
