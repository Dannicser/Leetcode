// https://leetcode.com/problems/jewels-and-stones/description/

function numJewelsInStones(a, b) {
  let c = 0;
  a = new Set(a);

  for (let item of b) {
    if (a.has(item)) {
      c++;
    }
  }

  return c;
}
