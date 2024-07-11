// https://leetcode.com/problems/contains-duplicate/description/

function find(nums) {
  const obj = {};

  for (let item of nums) {
    if (obj[item]) {
      return true;
    }

    obj[item] = item + "";
  }

  return false;
}

function find(nums) {
  return new Set(nums).size !== nums.length;
}
