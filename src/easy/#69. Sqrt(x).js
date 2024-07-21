// o(log(n))
function mySqrt(x) {
  let start = 0;
  let end = x;

  while (start <= end) {
    let middle = Math.round(end + start / 2);

    if (middle * middle < x) {
      start = middle + 1;
    } else if (middle * middle > x) {
      end = middle - 1;
    } else {
      return middle;
    }
  }

  return end;
}

//o(sqrt(n))
function mySqrt(x) {
  if (x === 1) {
    return 1;
  }

  if (x === 0) {
    return 0;
  }

  for (let i = 0; i <= x; i++) {
    if (i * i > x) {
      return i - 1;
    }
  }
}

console.log(mySqrt(16));
