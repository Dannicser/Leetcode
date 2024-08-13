// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/

function peakIndexInMountainArray(arr) {
  return binSearch(arr, 0, arr.length);
}

function binSearch(arr, start, end) {
  let middleIndex = Math.floor((start + end) / 2);

  if (arr[middleIndex - 1] < arr[middleIndex] && arr[middleIndex] > arr[middleIndex + 1]) {
    return middleIndex;
  }

  if (arr[middleIndex] < arr[middleIndex + 1]) {
    return binSearch(arr, middleIndex + 1, end);
  } else {
    return binSearch(arr, start, middleIndex - 1);
  }
}

console.log(peakIndexInMountainArray([0, 2, 1, 0]));
