// https://leetcode.com/problems/fibonacci-number/description/

// recursion with cash
const fib = memo((n) => {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
});

function memo(callback) {
  const cash = {};

  return function (n) {
    if (cash[n]) {
      return cash[n];
    } else {
      const res = callback(n);
      cash[n] = res;
      return res;
    }
  };
}

// loop

function fib(n) {
  let a = 1;
  let b = 1;

  if (!n) {
    return 0;
  }

  for (let i = 2; i < n; i++) {
    let sum = a + b;
    a = b;
    b = sum;
  }

  return b;
}
