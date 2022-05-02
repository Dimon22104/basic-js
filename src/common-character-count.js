const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    if (s1 === '' || s2 === '') {
        return 0
    }

    s1 = s1.split('')
    s1.sort()
    s2 = s2.split('')
    s2.sort()

    let arr1 = []
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s1[i - 1]) {
            arr1[arr1.length - 1][0] += 1
        }
        else {
            arr1.push([1, s1[i]])
        }
    }
    arr1 = arr1.map(item => item.reverse())
    let res1 = Object.fromEntries(arr1)


    let arr2 = []
    for (let i = 0; i < s2.length; i++) {
        if (s2[i] === s2[i - 1]) {
            arr2[arr2.length - 1][0] += 1
        }
        else {
            arr2.push([1, s2[i]])
        }
    }
    arr2 = arr2.map(item => item.reverse())
    let res2 = Object.fromEntries(arr2)


    let keys1 = Object.keys(res1)
    let keys2 = Object.keys(res2)
    let count = []
    for (let i = 0; i < keys1.length; i++) {

        if (res2.hasOwnProperty(keys1[i])) {
            if (res1[keys1[i]] === res2[keys1[i]]) {
                count.push(res1[keys1[i]])
            } else if (res1[keys1[i]] > res2[keys1[i]]) {
                count.push(res2[keys2[i]])
            }
            else {
                count.push(res1[keys1[i]])
            }
        }
    }
    return count.reduce((a, b) => a + b, 0)
}

module.exports = {
    getCommonCharacterCount
};
