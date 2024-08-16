// https://leetcode.com/problems/first-bad-version/description/

function binSearch(target) {
  let start = 0;
  let end = target;
  let res;

  while (start <= end) {
    let middleEl = Math.floor((start + end) / 2);

    if (isBadVersion(middleEl)) {
      end = middleEl - 1; // нет смысла смотреть правую часть, т.к. уже плохой продукт
      res = middleEl; // в результат всегда сохраняем последний плохой продукт
    } else {
      start = middleEl + 1; // нет смысла смотреть больше левую часть, т.к. там хороший продукт
    }
  }

  return res;
}
