// https://leetcode.com/problems/pascals-triangle/description/

function generate(n) {
  const arr = [[1], [1, 1]];

  if (n < 2) {
    return arr[n];
  }

  for (let i = 2; i < n; i++) {
    let subArray = [1];

    for (let j = 0; j < arr[i - 2].length; j++) {
      let num = arr[i - 1][j] + arr[i - 1][j + 1];
      subArray.push(num);
    }

    subArray.push(1);
    arr.push(subArray);
  }

  return arr;
}
