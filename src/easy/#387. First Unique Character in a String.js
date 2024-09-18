// https://leetcode.com/problems/first-unique-character-in-a-string/description/

function firstUniqChar(s) {
  const store = new Set();

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) === -1 && !store.has(s[i])) {
      return i;
    }

    store.add(s[i]);
  }

  return -1;
}
