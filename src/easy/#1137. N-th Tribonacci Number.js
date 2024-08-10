// https://leetcode.com/problems/n-th-tribonacci-number/description/

function tribonacci(n) {
  let db = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    db.push(db[i - 3] + db[i - 2] + db[i - 1]);
  }

  return db[db.length - 1];
}
