// https://leetcode.com/problems/check-if-n-and-its-double-exist/description/

function checkIfExist(arr) {
  const d = new Map();

  for (let item of arr) {
    // map отлично работает когда ключ и значение ноль, обычный объект возвращает 0 и это конвертируется в false, map возвращает boolean
    if (d.has(item / 2) || d.has(item * 2)) {
      return true;
    }

    d.set(item);
  }

  return false;
}

function checkIfExist(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }

      if (arr[i] === arr[j] * 2 || arr[i] === arr[j] / 2) {
        return true;
      }
    }
  }

  return false;
}
