//https://leetcode.com/problems/valid-perfect-square/description/

function isPerfectSquare(target) {
  const res = binSearch(target, 0, target);

  return res;
}

function binSearch(target, start, end) {
  let middleEl = Math.floor((end + start) / 2);

  if (middleEl * middleEl === target) {
    return true;
  }

  if (start >= end) {
    return false;
  }

  if (middleEl * middleEl > target) {
    return binSearch(target, start, middleEl - 1);
  } else {
    return binSearch(target, middleEl + 1, end);
  }
}

console.log(isPerfectSquare(16));
