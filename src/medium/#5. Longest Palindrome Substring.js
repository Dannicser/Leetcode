function findPalindrome(str) {
  // сохранять подстроку неэффективно по памяти
  let start = 0; // начальная позиция палиндрома
  let end = 0; // конечная позиция палиндрома

  for (let i = 0; i < str.length; i++) {
    let len1 = expandFromCenter(str, i, i);
    let len2 = expandFromCenter(str, i, i + 1);
    let len = Math.max(len1, len2);

    // если длина нового палиндрома больше
    if (len > end - start) {
      start = Math.ceil(i - (len - 1) / 2);
      end = Math.floor(i + len / 2);
    }
  }

  return str.substring(start, end + 1);
}

// возвращает макс длинну на которую удалось расшириться от цента
function expandFromCenter(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }

  return r - l - 1;
}

console.log(findPalindrome("aacabdkacaa"));
