// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/

function findNumbers(arr) {
  let count = 0;

  for (let item of arr) {
    let num = 0;

    while (item) {
      item = Math.floor(item / 10);
      num++;
    }

    if (num % 2 === 0) {
      count++;
    }
  }

  return count;
}
