// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

function findDuplicates(nums) {
  const dictionary = {};
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (dictionary[nums[i]]) {
      res.push(nums[i]);
    } else {
      dictionary[nums[i]] = nums[i];
    }
  }

  return res;
}
