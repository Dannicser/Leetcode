function findMaxAverage(arr, n) {
  let res = -Infinity;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    count++;

    if (count === n) {
      res = Math.max(res, sum / n);
    }

    if (count > n) {
      sum = sum - arr[i - n];
      res = Math.max(res, sum / n);
    }
  }

  return res;
}

// ------------------------

function findMaxAverage(arr, n) {
  let maxAvg = Number.MIN_SAFE_INTEGER;

  const q = [];

  for (let i = 0; i < arr.length; i++) {
    q.push(arr[i]);

    if (q.length === n) {
      maxAvg = Math.max(maxAvg, calcSum(q) / n);
    }

    if (q.length > n) {
      q.shift();
      maxAvg = Math.max(maxAvg, calcSum(q) / n);
    }
  }

  return maxAvg;
}

function calcSum(arr) {
  let sum = 0;

  for (let item of arr) {
    sum = sum + item;
  }

  return sum;
}
