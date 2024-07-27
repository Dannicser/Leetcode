// https://leetcode.com/problems/ugly-number/description/

function isUgly(n) {
  if (n < 0) {
    return false;
  }

  const uglyNumbers = {
    2: 2,
    3: 3,
    5: 5,
  };

  for (let key in uglyNumbers) {
    while (n % key === 0) {
      n = n / key;
    }
  }

  return n === 1; // если делится на все числа без остатка, получим 1
}
