// https://leetcode.com/problems/n-th-tribonacci-number/description/

function tribonacci(n) {
  let db = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    db.push(db[i - 3] + db[i - 2] + db[i - 1]);
  }

  return db[db.length - 1];
}

function tribonacci(n) {
  const dp = [0, 1, 1];

  if (n < 3) {
    return dp[n];
  }

  let i = 0;
  let sum = 0;

  while (i + 2 < n) {
    sum = dp[i] + dp[i + 1] + dp[i + 2];
    dp.push(sum);
    i++;
  }

  return sum;
}
