// https://leetcode.com/problems/detect-capital/

function detectCapitalUse(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else if (word === word.toLowerCase()) {
    return true;
  } else if (word === word[0].toUpperCase() + word.slice(1).toLowerCase()) {
    return true;
  }

  return false;
}
