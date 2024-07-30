// https://leetcode.com/problems/word-pattern/description/

function wordPattern(pattern, str) {
  const arr = str.split(" ");

  if (pattern.length !== arr.length) {
    return false;
  }

  const patternsSet = new Set();
  const wordsSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (wordsSet[pattern[i]] && wordsSet[pattern[i]] !== arr[i]) {
      return false;
    }

    if (patternsSet[arr[i]] && patternsSet[arr[i]] !== pattern[i] && typeof patternsSet[arr[i]] !== "function") {
      return false;
    }

    patternsSet[arr[i]] = pattern[i];
    patternsSet[pattern[i]] = arr[i];
  }

  return true;
}
