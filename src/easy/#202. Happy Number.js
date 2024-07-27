// https://leetcode.com/problems/happy-number/description/

function isHappy(n) {
  const cash = {};

  while (n != 1) {
    n = calculateSum(n);

    if (cash[n]) {
      return false;
    } else {
      cash[n] = n;
    }
  }

  return true;
}

function calculateSum(n) {
  let sum = 0;

  while (n > 0) {
    let value = Math.floor(n % 10);

    sum = sum + value ** 2;

    n = n / 10;
  }

  return sum;
}
