const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return str
  }
  str = str.split('')
  str = str.sort()
  const NEWARR = []
  for (let k = 0; k < str.length; k++) {
    if (str[k] === str[k - 1]) {
      NEWARR[NEWARR.length - 1][0] += 1
    }
    else {
      NEWARR.push([1, str[k]])
    }
  }
  let res = [].concat(...NEWARR)


  for (let i = 0; i < res.length; i++) {
    if (res[i] === 1) {
      res.splice(i, 1)
    }
  }

  return res.join('')
}

module.exports = {
  encodeLine
};
