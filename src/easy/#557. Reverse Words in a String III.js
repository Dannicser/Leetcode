// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

function reverseWords(s) {
  const arr = s.split(" ");
  let res = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      res = res + arr[i][j];
    }

    res = res + " ";
  }

  return res.trim();
}

function reverseWords(s) {
  const arr = s.split(" ");

  return arr.map((s) => s.split("").reverse().join("")).join(" ");
}
