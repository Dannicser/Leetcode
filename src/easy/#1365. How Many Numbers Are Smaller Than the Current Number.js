function smallerNumbersThanCurrent(nums) {
  let count = 0;
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }

    res.push(count);
    count = 0;
  }

  return res;
}

function smallerNumbersThanCurrent(nums) {
  // сортируем по возрастанию
  const sortedNums = [...nums].sort((a, b) => a - b);

  // возвращаем индексы изначальных элементов из сортированных
  return nums.map((num) => sortedNums.indexOf(num));
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
