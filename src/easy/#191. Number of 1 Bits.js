// https://leetcode.com/problems/number-of-1-bits/description/

function hammingWeight(n) {
  let c = 0;

  for (let item of n.toString(2)) {
    if (item === "1") {
      c++;
    }
  }

  return c;
}
