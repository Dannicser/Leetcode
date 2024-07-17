// https://leetcode.com/problems/valid-parentheses/description/

function isValid(str) {
  if (str.length % 2 !== 0) {
    return false;
  }

  const stack = [];
  const memory = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < str.length; i++) {
    if (memory[str[i]]) {
      stack.push(str[i]);
    } else if (memory[stack.slice(-1)[0]] !== str[i]) {
      return false;
    } else {
      stack.pop();
    }
  }

  return !stack.length ? true : false;
}
