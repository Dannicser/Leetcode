// https://leetcode.com/problems/binary-search/

// recursion
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

// loop
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let position = -1;
  let found = false;

  while (start <= end && !found) {
    let middleIndex = Math.floor((start + end) / 2);

    if (arr[middleIndex] === target) {
      found = true;
      position = middleIndex;
    }

    if (arr[middleIndex] > target) {
      end = middleIndex - 1;
    } else {
      start = middleIndex + 1;
    }
  }

  return position;
}
