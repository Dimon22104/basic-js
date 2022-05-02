const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names === []) {
    return names
  }
  let newArr = []
  for (let u = 0; u < names.length; u++) {
    if (!newArr.includes(names[u])) {
      newArr.push(names[u])
    }
    else if (newArr.includes(names[u] + `(${1})`)) {
      names[u] = names[u] + `(${2})`
      newArr.push(names[u])
    }
    else {
      names[u] = names[u] + `(${1})`
      newArr.push(names[u])
    }
  }
  return newArr
}

module.exports = {
  renameFiles
};
