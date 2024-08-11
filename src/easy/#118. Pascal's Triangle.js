// https://leetcode.com/problems/pascals-triangle/description/

function generate(n) {
  const arr = [[1], [1, 1]];

  if (n < 2) {
    return arr[n];
  }

  for (let i = 2; i < n; i++) {
    arr[i] = [1];
    for (let j = 1; j < arr[i - 1].length; j++) {
      arr[i].push(arr[i - 1][j] + arr[i - 1][j - 1]);
    }
    arr[arr[i].length].push(1);
  }

  return arr;
}
