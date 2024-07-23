function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    const targetIndex = arr.indexOf(n - arr[i], i + 1);

    if (targetIndex >= 0) {
      return [i, targetIndex];
    }
  }
}

function twoSum(arr, n) {
  const cash = {};

  for (let i = 0; i < arr.length; i++) {
    if (cash[n - arr[i]] > -1) {
      return [i, cash[n - arr[i]]];
    } else {
      cash[arr[i]] = i;
    }
  }
}
