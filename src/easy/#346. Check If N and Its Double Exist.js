// https://leetcode.com/problems/check-if-n-and-its-double-exist/description/

// o(n)
function checkIfExist(arr) {
  const store = {};

  for (let i = 0; i < arr.length; i++) {
    if (typeof store[arr[i] * 2] !== "undefined" || typeof store[arr[i] / 2] !== "undefined") {
      return true;
    } else {
      store[arr[i]] = arr[i];
    }
  }

  return false;
}

// o(n^2)
function checkIfExist(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j] * 2) {
        return true;
      }
    }
  }

  return false;
}
