const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function getNeighborCount(matrix, i, j) {
  let count = 0;
  for (let x = i - 1; x <= i + 1; x++) {
    for (let y = j - 1; y <= j + 1; y++) {
      if ((matrix[x] && matrix[x][y]) && !(x == i && y == j)) {
        count++;
      }
    }
  }
  return count;
}

function minesweeper(matrix) {
  return matrix.map((row, i) => row.map((val, j) => getNeighborCount(matrix, i, j)));
}

module.exports = {
  minesweeper
};
