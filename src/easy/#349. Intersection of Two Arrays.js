// https://leetcode.com/problems/intersection-of-two-arrays/

function findIntersection(a, b) {
  const res = [];

  // порядок неважен, поэтому просто проверяем наличия элемента в первом и во втором массиве, тогда пушем
  for (let item of a) {
    if (b.includes(item)) {
      res.push(item);
    }
  }

  return Array.from(new Set(res));
}
