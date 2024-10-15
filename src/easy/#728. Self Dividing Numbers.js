// https://leetcode.com/problems/self-dividing-numbers/description/

function selfDividingNumbers(l, r) {
  const res = [];

  for (let i = l; i < r + 1; i++) {
    let n = i;
    let isValid = true;

    while (n > 1) {
      if (i % Math.floor(n % 10) !== 0) {
        isValid = false;
      }

      n = n / 10;
    }

    if (isValid) {
      res.push(i);
    }
  }

  return res;
}
