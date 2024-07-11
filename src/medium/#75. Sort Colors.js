// https://leetcode.com/problems/sort-colors/description/

// selection sort
var sortColors = function (array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    let oldElem = array[i];
    array[i] = array[minIndex];
    array[minIndex] = oldElem;
  }

  return array;
};

// bubble sort
var sortColors = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let old = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = old;
      }
    }
  }

  return arr;
};
