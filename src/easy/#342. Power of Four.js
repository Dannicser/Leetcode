// https://leetcode.com/problems/power-of-four/submissions/1357710653/

function isPowerOfFour(n) {
  // если число делится на 4, то в конечном счете мы придем к 1 обязательно, а это значит что его можно было возвести в 4 степень
  if (n === 1) {
    return true;
  }

  if (n < 1) {
    return false;
  }

  return isPowerOfFour(n / 4);
}
