// https://leetcode.com/problems/missing-number/description/

function missingNumber(arr) {
  let set = new Set(arr);

  for (let i = 0; i <= arr.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}

// o(n)
function missingNumber(arr) {
  let total = arr.length;

  for (let i = 0; i < arr.length; i++) {
    total = total + i - arr[i];
  }

  return total;
}

// 0(n^2)
function missingNumber(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}
