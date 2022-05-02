const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (matrix[0] === 0) {
    return matrix
  }
  const NEWARR = []
  let resArr = [].concat(...matrix)
  console.log(resArr)
  if (resArr.length <= 4) {
    for (let i = 0; i < resArr.length; i++) {
      if (resArr[i - 1] !== 0) {
        NEWARR.push(resArr[i])
      }
    }
  } else {
    for (let i = 0; i < resArr.length; i++) {
      if (resArr[i - 4] !== 0) {
        NEWARR.push(resArr[i])
      }
    }
  }



  return NEWARR.reduce((a, b) => a + b, 0)
}

module.exports = {
  getMatrixElementsSum
};
