// https://leetcode.com/problems/single-number/description/

function findSingleNumber(nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] = obj[nums[i]] + 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
}

// с одним проходом
function find(arr) {
  const store = {};

  for (let i = 0; i < arr.length; i++) {
    if (store[arr[i]]) {
      delete store[arr[i]];
    } else {
      store[arr[i]] = 1;
    }
  }

  return Number(Object.keys(store)[0]);
}

// решение через xor
function singleNumber(arr) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res = res ^ arr[i]; // xor - если на входе 2 бита одинаковы, то результат будет равен 0, останется только число без пары
  }

  return res;
}
