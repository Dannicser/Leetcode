// https://leetcode.com/problems/license-key-formatting/description/

function licenseKeyFormatting(str, n) {
  const arr = str.replace(/-/gi, "").toUpperCase().split("");
  let res = [];

  while (arr.length >= n) {
    const chunk = arr.splice(-n);

    res.unshift(...chunk, "-");
  }

  res.pop();

  // the rest part
  if (arr.length) {
    res.unshift(...arr, arr.length === 1 ? "" : "-");
  }

  return res.join("");
}
