//https://leetcode.com/problems/remove-element/description/

function removeElement(nums, val) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      count++;
    } else {
      nums.splice(i, 1);
      --i;
    }
  }

  return count;
}

function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
