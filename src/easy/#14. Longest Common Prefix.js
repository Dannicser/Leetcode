// https://leetcode.com/problems/longest-common-prefix/description/

function longestCommonPrefix(arr) {
  const firstEl = arr[0];
  let res = "";

  for (let i = 0; i < firstEl.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (firstEl[i] !== arr[j][i]) {
        return res;
      }
    }

    res = res + firstEl[i];
  }

  return res;
}

//

function longestCommonPrefix(arr) {
  let shortestWord = arr[0];

  for (let item of arr) {
    if (item.length < shortestWord.length) {
      shortestWord = item;
    }
  }

  for (let i = 0; i < shortestWord.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (shortestWord[i] !== arr[j][i]) {
        return shortestWord.slice(0, i);
      }
    }
  }

  return shortestWord;
}
