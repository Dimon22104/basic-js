const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let minus = -1
  if (!arr.includes(minus)) {
    return arr.sort((a, b) => a - b)
  }


  let startArr = [...arr]
  startArr = startArr.map(elem => {
    if (elem !== -1) {
      elem = '*'
    }
    return elem
  })
  arr = arr.filter(elem => elem > 0).sort((a, b) => a - b)
  let con = 0
  for (let i = 0; i < startArr.length; i++) {

    if (startArr[i] === '*') {
      startArr[i] = arr[con]
      con++
    }
  }
  return startArr
}


module.exports = {
  sortByHeight
};
