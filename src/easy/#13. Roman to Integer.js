// https://leetcode.com/problems/roman-to-integer/description/

function romanToInt(str) {
  let sum = 0;

  const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < str.length; i++) {
    if (dictionary[str[i]] < dictionary[str[i + 1]]) {
      sum = sum - dictionary[str[i]];
    } else {
      sum = sum + dictionary[str[i]];
    }
  }

  return sum;
}

// 1 - ЕСЛИ ТЕКУЩЕЕ ЧИСЛО МЕНЬШЕ ЧЕМ СЛЕДУЮЩЕЕ, ТО МЫ ДОЛЖНЫ ПРИБАВИТЬ ТЕКУЩЕЕ ЧИСЛО К ОБЩЕЙ СУММЕ
// 2 - ЕСЛИ ТЕКУЩЕЕ ЧИСЛО БОЛЬШЕ ЧЕМ СЛЕДУЮЩЕЕ, ТО МЫ ДОЛЖНЫ ВЫЧЕСИТЬ ТЕКУЩЕЕ ЧИСЛО ИЗ ОБЩЕЙ СУММЫ
