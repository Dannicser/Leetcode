// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

function findIndex(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
}

function findIndex(haystack, needle) {
  return haystack.indexOf(needle);
}
