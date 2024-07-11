// https://leetcode.com/problems/same-tree/description/

function isTheSameTree(p, q) {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.val === q.val) {
    return isTheSameTree(p.left, q.left) && isTheSameTree(p.right, q.right);
  }

  return false;
}
