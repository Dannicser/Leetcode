// https://leetcode.com/problems/valid-palindrome/submissions/1308198673/

// first solution
function palidrome(s) {
  const str = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
}

// second solution
function palidrome(s) {
  const str = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}
