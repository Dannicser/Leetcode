// https://leetcode.com/problems/fizz-buzz/description/

function fizzBuzz(n) {
  const arr = [];

  while (n > 0) {
    if (n % 3 === 0 && n % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (n % 3 === 0) {
      arr.push("Fizz");
    } else if (n % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(String(n));
    }

    n--;
  }

  return arr.reverse();
}
