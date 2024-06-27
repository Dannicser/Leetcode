// https://leetcode.com/problems/longest-common-prefix/description/

function findPrefix(arr) {
  let shortestWord = arr[0];
  let res = "";

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortestWord.length) {
      shortestWord = arr[i];
    }
  }

  for (let i = 0; i < shortestWord.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (!arr[k].startsWith(shortestWord.slice(0, i + 1))) {
        return res;
      }
    }

    res = res + shortestWord[i];
  }

  return res;
}
