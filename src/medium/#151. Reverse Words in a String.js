// https://leetcode.com/problems/reverse-words-in-a-string/description/

function reverseWords(str) {
  const arr = str.replace(/ {1,}/g, " ").split(" ");
  const res = [];

  let i = arr.length;

  while (i >= 0) {
    res.push(arr[i], " ");
    i--;
  }

  return res.join("").trim();
}
