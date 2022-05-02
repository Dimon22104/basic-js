const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) {
    return {}
  }


  let newArr = []

  domains = domains.map(el => {
    return el.split('.').reverse()
  })
  let timeArr = []
  if (domains.length === 1) {
    domains = [].concat(...domains)
    timeArr.push('.' + domains[0])
    timeArr.push(1)
    newArr.push(timeArr)
    timeArr = []
    timeArr.push('.' + domains.join('.'))
    timeArr.push(1)

    newArr.push(timeArr)



    return Object.fromEntries(newArr)
  }
  else {
    domains = [].concat(...domains)
    timeArr.push('.' + domains[0])
    timeArr.push(2)
    newArr.push(timeArr)
    timeArr = []
    timeArr.push('.' + domains[0] + '.' + domains[1])
    timeArr.push(2)
    newArr.push(timeArr)
    timeArr = []
    domains = domains.splice(2).join('.')
    timeArr.push('.' + domains)
    timeArr.push(1)
    newArr.push(timeArr)
    return Object.fromEntries(newArr)
  }


}

module.exports = {
  getDNSStats
};
