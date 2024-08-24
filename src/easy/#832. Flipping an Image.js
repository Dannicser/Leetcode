// https://leetcode.com/problems/flipping-an-image/description/

function flipAndInvertImage(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] = 0;
      } else {
        matrix[i][j] = 1;
      }
    }

    matrix[i].reverse();
  }

  return matrix;
}
