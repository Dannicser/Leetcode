// https://leetcode.com/problems/plus-one/description/

function plusOne(arr) {
  return (BigInt(arr.join("")) + BigInt(1)).toString().split("");
}
