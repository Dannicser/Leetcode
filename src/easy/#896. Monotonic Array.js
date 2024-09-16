// https://leetcode.com/problems/monotonic-array/description/

function isMonotonic(arr) {
  let dec = true;
  let inc = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      dec = false;
    }

    if (arr[i] < arr[i + 1]) {
      inc = false;
    }
  }

  return inc || dec;
}
