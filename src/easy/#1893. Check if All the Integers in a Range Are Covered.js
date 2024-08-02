// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/description/

function isCovered(ranges, left, right) {
  const store = {};

  // записываем все допустимые значения из интервалов
  for (let i = 0; i < ranges.length; i++) {
    for (let j = ranges[i][0]; j <= ranges[i][1]; j++) {
      store[j] = j;
    }
  }

  // если нет какого-то значения из диапазон left-right, то возвращаем false
  for (let i = left; i <= right; i++) {
    if (!store[i]) {
      return false;
    }
  }

  return true;
}
