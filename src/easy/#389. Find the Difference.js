// https://leetcode.com/problems/find-the-difference/description/

function findTheDifference(t, s) {
  const store = {};
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (store[s[i]]) {
      store[s[i]] = store[s[i]] + 1;
    } else {
      store[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (store[t[i]]) {
      store[t[i]] = store[t[i]] - 1;
    }
  }

  for (let key in store) {
    while (store[key]) {
      res = res + key;
      store[key]--;
    }
  }

  return res;
}
