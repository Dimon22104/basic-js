const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool) {
    this.bool = bool
  }
  encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    text = text.toUpperCase();
    let wordForFinalCheck = text
    let arrSymbol;
    let espT = text.split('')
    for (let i = 0; i < espT.length; i++) {
      if (!espT[i].match(/[a-z]/gi) && espT[i] !== ' ') {
        arrSymbol = espT.splice(i)
        text = espT
      }
      else {
        text = espT
      }
    }
    text = text.join('')
    let spaceText = text
    text = text.replace(/ /g, '');
    key = key.toUpperCase();
    let kf = Math.ceil(text.length / key.length)
    key = key.repeat(kf)
    let codeA = 'A'.charCodeAt(0)
    let abcCount = 26
    let result = []
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        result.push(text[i])
      }
      else {
        let letterInd = text.charCodeAt(i) - codeA
        let letterChift = key.charCodeAt(i) - codeA
        result.push(
          String.fromCharCode(codeA + (letterInd + letterChift) % abcCount)
        )
      }
    }
    for (let i = 0; i < spaceText.length; i++) {
      if (spaceText[i] === ' ') {
        result.splice(i, 0, ' ')
      }
    }
    let resEx = result.join('').trim()

    let finalSymbol
    if (arrSymbol === undefined) {
      finalSymbol = undefined
    }
    else {

      finalSymbol = arrSymbol.join('')
    }
    if (finalSymbol === undefined) {
      if (this.bool === false) {
        return resEx.split('').reverse().join('')

      }
      else {
        return resEx
      }
    }
    else {
      let final
      let x = wordForFinalCheck[wordForFinalCheck.length - finalSymbol.length - 1]
      if (x === '') {
        final = resEx + finalSymbol

      }
      if (x === ' ') {
        final = resEx + x + finalSymbol
      }
      else {
        final = resEx + finalSymbol

      }

      if (this.bool === false) {
        return final.split('').reverse().join('')

      }
      else {
        return final
      }

    }



  }
  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    text = text.toUpperCase();
    let wordForFinalCheck = text
    let arrSymbol;
    let espT = text.split('')
    for (let i = 0; i < espT.length; i++) {
      if (!espT[i].match(/[a-z]/gi) && espT[i] !== ' ') {
        arrSymbol = espT.splice(i)
        text = espT
      }
      else {
        text = espT
      }
    }
    text = text.join('')
    let spaceText = text
    text = text.replace(/ /g, '');
    key = key.toUpperCase();
    let kf = Math.ceil(text.length / key.length)
    key = key.repeat(kf)
    let codeA = 'A'.charCodeAt(0)
    let abcCount = 26
    let result = []
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        result.push(text[i])
      }
      else {
        let letterInd = text.charCodeAt(i) - codeA
        let letterChift = key.charCodeAt(i) - codeA
        result.push(
          String.fromCharCode(codeA + (letterInd - letterChift + abcCount) % abcCount)
        )
      }
    }
    for (let i = 0; i < spaceText.length; i++) {
      if (spaceText[i] === ' ') {
        result.splice(i, 0, ' ')
      }
    }
    let resEx = result.join('').trim()
    let finalSymbol
    if (arrSymbol === undefined) {
      finalSymbol = undefined
    }
    else {

      finalSymbol = arrSymbol.join('')
    }
    if (finalSymbol === undefined) {
      if (this.bool === false) {
        return resEx.split('').reverse().join('')
      }
      else {
        return resEx
      }
    }
    else {
      let final
      let x = wordForFinalCheck[wordForFinalCheck.length - finalSymbol.length - 1]
      if (x === '') {
        final = resEx + finalSymbol
      }
      if (x === ' ') {
        final = resEx + x + finalSymbol
      }
      else {
        final = resEx + finalSymbol
      }
      if (this.bool === false) {
        return final.split('').reverse().join('')
      }
      else {
        return final
      }
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
