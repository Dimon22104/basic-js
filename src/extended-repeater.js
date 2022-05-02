const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const REPEAT_TIMES = options.repeatTimes
  let separator = options.separator
  let ADDITON = options.addition
  const ADDITION_TIMES = options.additionRepeatTimes
  const ADDITION_SEPARATOR = options.additionSeparator;

  if (separator === undefined) {
    separator = '+'
  }

  ///
  if (ADDITION_TIMES === undefined && ADDITION_SEPARATOR === undefined && ADDITON === undefined) {
    str = str + separator
    str = str.repeat(REPEAT_TIMES)
    let res = str.split('')
    res.splice()
    return res.splice(0, res.length - separator.length).join('')

  }

  if (ADDITION_TIMES === undefined && ADDITION_SEPARATOR === undefined) {
    let res = (str + ADDITON + separator).repeat(REPEAT_TIMES)
    return res.slice(0, res.length - 1)
  }


  //

  if (REPEAT_TIMES === undefined) {
    return str + ADDITON
  }

  if (ADDITON === undefined) {
    str = str + separator
    str = str.repeat(REPEAT_TIMES)
    let res = str.split('')
    res.splice()
    return res.splice(0, res.length - separator.length).join('')
  }

  if (ADDITION_SEPARATOR === undefined) {
    if (ADDITION_TIMES === 1) {
      str = str + ADDITON
      // console.log('2')
      str = str + separator
      str = str.repeat(REPEAT_TIMES)
      let res = str.split('')
      // res.splice()
      return res.splice(0, res.length - separator.length).join('')
    }
    else {
      ADDITON = ADDITON + '|'
      ADDITON = ADDITON.repeat(ADDITION_TIMES)
      ADDITON = ADDITON.slice(0, ADDITON.length - 1)
      str = str + ADDITON
      // console.log('2')
      str = str + separator
      str = str.repeat(REPEAT_TIMES)
      let res = str.split('')
      // res.splice()
      return res.splice(0, res.length - separator.length).join('')

    }
  }
  let additionStr = ADDITON + ADDITION_SEPARATOR;
  additionStr = additionStr.repeat(ADDITION_TIMES)
  additionStr = additionStr.split('')
  let resADDSTR = additionStr.splice(0, additionStr.length - ADDITION_SEPARATOR.length).join('')

  str += resADDSTR
  str += separator
  str = str.repeat(REPEAT_TIMES)
  let res = str.split('')
  res.splice()
  return res.splice(0, res.length - separator.length).join('')
}

module.exports = {
  repeater
};
