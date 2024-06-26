// https://leetcode.com/problems/promise-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript

function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return reject("Time Limit Exceeded");
      }, t);

      return fn(...args)
        .then(resolve)
        .catch(reject);
    });
  };
}
