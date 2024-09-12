// https://leetcode.com/problems/isomorphic-strings/description/

function isIsomorphic(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const s1 = {};
  const s2 = {};

  // решаем через шифр цезаря, отражаем одну букву на другую

  for (let i = 0; i < a.length; i++) {
    if (!s1[a[i]]) {
      s1[a[i]] = b[i];
    } else if (s1[a[i]] !== b[i]) {
      return false;
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (!s2[b[i]]) {
      s2[b[i]] = a[i];
    } else if (s2[b[i]] !== a[i]) {
      return false;
    }
  }

  return true;
}
