// https://leetcode.com/problems/is-subsequence/description/

function isSubsequence(a, b) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < b.length; i++) {
    if (a[left] === b[right]) {
      left++;
      right++;
    } else {
      right++;
    }
  }

  return left === a.length;
}

function isSubsequence(a, b) {
  const stack = a.split("");

  for (let i = 0; i < b.length; i++) {
    if (stack[0] === b[i]) {
      stack.shift();
    }
  }

  return stack.length === 0;
}
