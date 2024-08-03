// https://leetcode.com/problems/can-place-flowers/description/

function canPlaceFlowers(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 1 && arr[i + 1] !== 1 && arr[i - 1] !== 1) {
      n--;
      arr[i] = 1;
    }
  }

  return n <= 0;
}
