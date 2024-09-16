// решение с одним указателем и in-place
function sortArrayByParity(arr) {
  let r = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // МОЖНО ТАК ПИСАТЬ!
      [arr[r], arr[i]] = [arr[i], arr[r]];

      // const old = arr[r];
      // arr[r] = arr[i];
      // arr[i] = old;
      r++;
    }
  }

  return arr;
}

// решение с деструк и доп массивом
function sortArrayByParity(arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      res.push(arr[i]);
      arr.splice(i, 1);
      i--;
    }
  }

  return [...res, ...arr];
}
