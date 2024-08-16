function guessNumber(n) {
  return binSearch(n, 0, n);
}

function binSearch(n, start, end) {
  const middleEl = Math.floor((start + end) / 2);

  // api
  if (guess(middleEl) === 0) {
    return middleEl;
  }

  if (guess(middleEl) === -1) {
    return binSearch(n, start, middleEl - 1);
  } else {
    return binSearch(n, middleEl + 1, end);
  }
}
