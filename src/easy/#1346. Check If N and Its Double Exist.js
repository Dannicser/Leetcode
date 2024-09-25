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
