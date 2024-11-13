// https://leetcode.com/problems/coin-change/description/

function coinChange(coins, amount) {
  d = {};

  function helper(amount) {
    if (amount in d) {
      return d[amount];
    }

    if (amount === 0) {
      return 0;
    }

    if (amount < 0) {
      return Infinity;
    }

    ret = Infinity;

    for (let coin of coins) {
      ret = Math.min(ret, 1 + helper(amount - coin));
    }

    d[amount] = ret;

    return ret;
  }

  const ans = helper(amount);

  if (ans === Infinity) {
    return -1;
  }

  return ans;
}

console.log(coinChange([1, 2, 5], 11));
