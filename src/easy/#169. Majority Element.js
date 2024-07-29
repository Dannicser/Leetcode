// https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
// https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D0%BD%D1%81%D1%82%D0%B2%D0%B0_%D0%B3%D0%BE%D0%BB%D0%BE%D1%81%D0%BE%D0%B2_%D0%91%D0%BE%D0%B9%D0%B5%D1%80%D0%B0_%E2%80%94_%D0%9C%D1%83%D1%80%D0%B0

// 0(n) Алгоритм большинства голосов Бойера — Мура
function majoritiryElem(arr) {
  let count = 0;
  let value = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      value = arr[i];
    }

    if (value === arr[i]) {
      count = count + 1;
    } else {
      count = count - 1;
    }
  }

  return value;
}

// алгоритм с объектом(сетом) o(n)
function majoritiryElem(arr) {
  const store = {};
  let max = 0;
  let res;

  for (let i = 0; i < arr.length; i++) {
    if (store[arr[i]]) {
      store[arr[i]] = 1 + store[arr[i]];
    } else {
      store[arr[i]] = 1;
    }
  }

  for (let key in store) {
    if (store[key] > max) {
      max = store[key];
      res = key;
    }
  }

  return res;
}
