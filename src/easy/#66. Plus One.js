// https://leetcode.com/problems/plus-one/description/

function plusOne(arr) {
  return String(BigInt(arr.join("")) + BigInt(1))
    .split("")
    .map((el) => Number(el));
}
