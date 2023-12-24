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
function minesweeper(matrix) {
  const result = Array.from({length : matrix.length},
      () => new Array(matrix[0].length).fill(0));
  for (let col = 0; col < matrix.length; col++) {
      for (let row = 0; row < matrix[0].length; row++) {
          if (([col-1] > -1 && [row-1] > -1) && (matrix[col][row] === true)) result[col-1][row-1] += 1;
          if (([col-1] > -1 && [row] > -1) && (matrix[col][row] === true)) result[col-1][row] += 1;
          if (([col-1] > -1 && [row+1] > -1) && (matrix[col][row] === true)) result[col-1][row+1] += 1;
          if (([col] > -1 && [row-1] > -1) && (matrix[col][row] === true)) result[col][row-1] += 1;
          if (([col] > -1 && [row+1] > -1) && (matrix[col][row] === true)) result[col][row+1] += 1;
          if (([col+1] > -1 && [row-1] > -1) && (matrix[col][row] === true)) result[col+1][row-1] += 1;
          if (([col+1] > -1 && [row] > -1) && (matrix[col][row] === true)) result[col+1][row] += 1;
          if (([col+1] > -1 && [row+1] > -1) && (matrix[col][row] === true)) result[col+1][row+1] += 1;
      }
  }
  return result;
  //done
}

module.exports = {
  minesweeper
};
