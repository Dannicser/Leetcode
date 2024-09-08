// https://leetcode.com/problems/reverse-vowels-of-a-string/description/

function reverseVowels(s) {
  const vowels = new Set(["a", "e", "u", "i", "o", "A", "E", "U", "I", "O"]);
  const arr = s.split("");

  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    if (!vowels.has(arr[l])) {
      l++;
    }

    if (!vowels.has(arr[r])) {
      r--;
    }

    if (vowels.has(arr[l]) && vowels.has(arr[r])) {
      let old = arr[l];
      arr[l] = arr[r];
      arr[r] = old;
      r--;
      l++;
    }
  }

  return arr.join("");
}
