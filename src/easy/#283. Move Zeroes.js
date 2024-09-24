// https://leetcode.com/problems/move-zeroes/description/

function moveZeroes(arr) {
  let left = 0; // всегда будет указывать на самый крайне левый 0
  let right = 0; // всегда идет направо пока не найдет число отличное от нуля

  for (let i = 0; i < arr.length; i++) {
    if (arr[right] !== 0) {
      [arr[l], arr[r]] = [arr[r], arr[l]]; // короче

      // let old = arr[right];
      // arr[right] = arr[left];
      // arr[left] = old;
      left++;
    }

    right++;
  }

  return arr;
}
