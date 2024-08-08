// https://leetcode.com/problems/add-digits/description/

// without recursion
function addDigits(n) {
  while (n >= 10) {
    n = sumDigits(n);
  }

  return n;
}

// with recursion
function addDigits(n) {
  if (n < 10) {
    return n;
  }

  return addDigits(sumDigits(n));
}

// common function
function sumDigits(n) {
  let sum = 0;

  while (n > 0) {
    let digit = Math.floor(n % 10);
    sum = sum + digit;

    n = n / 10;
  }

  return sum;
}

// цикл в цикле

function addDigits(n) {
  while (n >= 10) {
    let tmpn = n;
    let sum = 0;

    while (tmpn > 0) {
      sum = sum + Math.floor(tmpn % 10);
      tmpn = tmpn / 10;
      n = sum;
    }
  }

  return n;
}
