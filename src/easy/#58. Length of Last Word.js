// https://leetcode.com/problems/length-of-last-word/description/

function lengthOfLastWord(str) {
  const res = str
    .split(" ")
    .reverse()
    .find((el) => el.length);

  return res.length;
}
