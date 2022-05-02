const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newArr = []
  let str = String(n)
  let strArr = str.split('')
  for (let i = 0; i < strArr.length; i++) {
    let current;
    let timeArr = [...strArr]
    timeArr.splice(i, 1)
    current = timeArr
    newArr.push(current)
    current = 0
  }
  let finalArr = []
  newArr.map(elem => {
    finalArr.push(Number(elem.join('')))
  })
  return finalArr.sort((a, b) => b - a)[0]
}

module.exports = {
  deleteDigit
};
