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

// o(n^2)
function kidsWithCandies(arr, n) {
  const res = [];

  exit: for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] + n < arr[j]) {
        res.push(false);
        continue exit;
      } else if (j === arr.length - 1) {
        res.push(true);
        continue exit;
      }
    }
  }

  return res;
}
