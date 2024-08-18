// https://leetcode.com/problems/power-of-two/description/

function isPowerOfTwo(n) {
  if (n <= 0) {
    return false;
  }

  const dec = n.toString(2); // если в двоичном представлении числа есть одна 1, то это число имеет степень двойки

  const obj = {};

  for (let i = 0; i < dec.length; i++) {
    if (obj[dec[i]] === "1") {
      return false;
    } else {
      obj[dec[i]] = dec[i];
    }
  }

  return true;
}

// recursion
function isPowerOfTwo(n) {
  if (n === 1) {
    return true;
  }

  if (n < 1) {
    return false;
  }

  return isPowerOfTwo(n / 2);
}
