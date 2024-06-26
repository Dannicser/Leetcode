// https://leetcode.com/problems/debounce/description/?envType=study-plan-v2&envId=30-days-of-javascript

function debounce(fn, t) {
  let timerId = undefined;

  return function () {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn();
    }, t);
  };
}
