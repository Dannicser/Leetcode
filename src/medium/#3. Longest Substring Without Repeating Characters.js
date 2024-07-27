// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

function findSubstring(str) {
  let max = 0;
  let left = 0;
  let right = 0;
  const set = new Set();

  for (let i = right; i < str.length; i++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left = left + 1;
    }

    set.add(str[right]);
    right = right + 1;
    max = Math.max(max, right - left);
  }

  return max;
}
