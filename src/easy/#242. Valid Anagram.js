// https://leetcode.com/problems/valid-anagram/description/

function isAnagram(a, b) {
  a = a.split("").sort();
  b = b.split("").sort();

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}
