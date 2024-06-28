// https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1302836836/

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--; // extremly important
    }
  }

  return arr.length;
}
