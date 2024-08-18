// https://leetcode.com/problems/backspace-string-compare/description/

function backspaceCompare(a, b) {
  return typing(a) === typing(b);
}

function typing(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}
