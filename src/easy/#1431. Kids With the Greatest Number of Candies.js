// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

function kidsWithCandies(candies, extraCandies) {
  const res = [];

  const max = Math.max(...candies); // o(n)

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      res.push(true);
    } else {
      res.push(false);
    }
  }

  return res;
}
