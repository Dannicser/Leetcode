// https://leetcode.com/problems/reverse-string/description/

function reverseString(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let old = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = old;
  }

  return arr;
}

function reverseString(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let old = arr[l];
    arr[l] = arr[r];
    arr[r] = old;
    r--;
    l++;
  }

  return arr;
}
