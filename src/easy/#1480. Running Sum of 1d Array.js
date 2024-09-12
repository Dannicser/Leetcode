// https://leetcode.com/problems/running-sum-of-1d-array/description/

// in-place
function runningSum(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i - 1];
  }

  return arr;
}

function runningSum(arr) {
  const res = [];
  let sum = 0;

  for (let item of arr) {
    sum = sum + item;
    res.push(sum);
  }

  return res;
}
