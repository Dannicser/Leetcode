// https://leetcode.com/problems/contains-duplicate-ii/description/

function containsNearbyDuplicate(arr, k) {
  const store = {};

  for (let i = 0; i < arr.length; i++) {
    if (i - store[arr[i]] <= k) {
      return true;
    }

    store[arr[i]] = i;
  }

  return false;
}
