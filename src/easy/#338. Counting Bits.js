// https://leetcode.com/problems/counting-bits/description/

function countBits(n) {
  const res = [];

  while (n >= 0) {
    res.push(count(n.toString(2)));
    n--;
  }

  return res.reverse();
}

function count(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      count++;
    }
  }

  return count;
}
