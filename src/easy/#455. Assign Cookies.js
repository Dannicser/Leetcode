// https://leetcode.com/problems/assign-cookies/description/

function findContentChildren(kids, cookies) {
  kids.sort((a, b) => a - b);
  cookies.sort((a, b) => a - b);

  let j = 0;

  // идем именно по печенькам
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i] >= kids[j]) {
      j++;
    }
  }

  return j;
}
