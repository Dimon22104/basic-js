const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let string = 'x'
  let number = 2
  let z = ' \n\t\r'
  if (parseFloat(sampleActivity) > 15 || parseInt(sampleActivity) <= 0) {
    console.log('1')
    return false
  }
  if (sampleActivity === z) {
    console.log('2')
    return false
  }
  if (typeof (sampleActivity) !== typeof (string)) {
    console.log('3')
    return false
  }
  if (sampleActivity.length === 0) return false

  const digits_only = [...sampleActivity].every(c => '0123456789.'.includes(c));
  if (digits_only === false) {
    return false
  }
  else {
    let k = 0.693 / 5730

    let result = Math.log(15 / sampleActivity) / k
    return Math.ceil(result)
  }
}

module.exports = {
  dateSample
};
