// https://leetcode.com/problems/counting-bits/description/

function countBits(n) {
  const res = [];

  while (n >= 0) {
    res.push(count(n.toString(2)));
    n--;
  }

  return res.reverse();
}

function count(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      count++;
    }
  }

  return count;
}

// -------------------------пример решение с побитовым оператором-------------------------

function countBits(n) {
  const res = [];

  while (n >= 0) {
    let counter = 0;

    let tmpn = n;

    while (tmpn > 0) {
      if (tmpn % 2 === 1) {
        counter++;
      }

      tmpn = tmpn >> 1;
    }

    res.unshift(counter); // можно заменить на push и reverse, сильно увеличит произоводительность

    n--;
  }

  return res;
}
