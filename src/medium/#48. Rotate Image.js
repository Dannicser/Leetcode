// https://leetcode.com/problems/rotate-image/description/

function rotate(cube) {
  let side = cube.length - 1;
  let oldCube = JSON.parse(JSON.stringify(cube));

  for (let i = 0; i < cube.length; i++) {
    for (let j = 0; j < cube.length; j++) {
      cube[j][side] = oldCube[i][j];
    }

    side--;
  }

  return cube;
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
