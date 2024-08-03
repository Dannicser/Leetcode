// https://leetcode.com/problems/merge-strings-alternately/description/

function mergeAlternately(a, b) {
  let res = "";

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i]) {
      res = res + a[i];
    }
    if (b[i]) {
      res = res + b[i];
    }
  }

  return res;
}
