// https://leetcode.com/problems/unique-number-of-occurrences/description/

function uniqueOccurrences(arr) {
  const store = {};
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (store[arr[i]]) {
      store[arr[i]] = 1 + store[arr[i]];
    } else {
      store[arr[i]] = 1;
    }
  }

  for (let key in store) {
    if (set.has(store[key])) {
      return false;
    } else {
      set.add(store[key]);
    }
  }

  return true;
}
