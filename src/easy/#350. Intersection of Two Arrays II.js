// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

function intersect(a, b) {
  a = a.sort((a, b) => a - b);
  b = b.sort((a, b) => a - b);

  let left = 0;
  let right = 0;

  const output = [];

  while (left < a.length && right < b.length) {
    if (a[left] < b[right]) {
      left++;
    } else if (a[left] > b[right]) {
      right++;
    } else {
      output.push(a[left]);
      left++;
      right++;
    }
  }

  return output;
}

// 1 сортируем два массива и пробегаемся циклом до дех пор пока элементы одного из них не закончатся
// 2 если элемент первого массива равен элементу из второго массива - добавляем в результирующий массив
// 3! если элемент первого массива меньше, чем второго, то сдвигаем левый указатель
// 4! если элемент первого массива больше, чем второго. то сдвигаем правый указатель
// 5 возвращаем результирующий массив
