// https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/

// o(n)
function findWinners(arr) {
  // используем сортировку подсчетом, потому что знаем максимальное кол-во элементов и их максимальное значение
  const tempArr = Array(10 ** 5 + 1).fill(-1, 0, 10 ** 5 + 1);
  const res = [[], []];

  for (let i = 0; i < arr.length; i++) {
    if (tempArr[arr[i][0]] === -1) {
      tempArr[arr[i][0]] = 0;
    }

    if (tempArr[arr[i][1]] === -1) {
      tempArr[arr[i][1]] = 1;
    } else {
      tempArr[arr[i][1]] = tempArr[arr[i][1]] + 1;
    }
  }

  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === 0) {
      res[0].push(i);
    }

    if (tempArr[i] === 1) {
      res[1].push(i);
    }
  }

  return res;
}

// o(log(n))
function findWinners(arr) {
  const losers = {};
  const res = [[], []];

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i][0] in losers)) {
      losers[arr[i][0]] = 0;
    }

    losers[arr[i][1]] = losers[arr[i][1]] ? losers[arr[i][1]] + 1 : 1;
  }

  for (let key in losers) {
    if (losers[key] === 1) {
      res[1].push(key);
    }

    if (losers[key] === 0) {
      res[0].push(key);
    }
  }

  return res;
}
