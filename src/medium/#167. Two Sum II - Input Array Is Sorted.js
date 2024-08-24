// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// hash table
function twoSum(arr, target) {
  const store = {};

  for (let i = 0; i < arr.length; i++) {
    if (typeof store[arr[i]] !== "undefined") {
      return [store[arr[i]] + 1, i + 1];
    } else {
      store[target - arr[i]] = i;
    }
  }

  return store;
}

// two pointers
function twoSum(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    if (arr[l] + arr[r] === target) {
      return [l + 1, r + 1];
    }

    if (arr[l] + arr[r] < target) {
      r--;
    } else {
      l++;
    }
  }

  return res;
}
