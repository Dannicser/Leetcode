// https://leetcode.com/problems/longest-consecutive-sequence/description/

function longestConsecutive(arr) {
  if (!arr.length) {
    return 0;
  }

  const set = new Set(arr);

  let count = 0;
  let res = 0;

  for (let item of set) {
    // если в сете нет элемента меньше на один, значит текущий элемент начинает последовательность
    if (!set.has(item - 1)) {
      count++;
      // ходим в цикле, пока есть последовательность
      while (set.has(item + count)) {
        count++;
      }

      if (count > res) {
        res = count;
      }

      count = 0;
    } else {
      count = 0;
    }
  }

  return res;
}
