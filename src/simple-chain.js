const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  str: [],
  getLength() {
    return this.str.length

  },
  addLink(value) {
    if (value === undefined) {
      this.str.push('( )')
      return this
    }
    this.str.push('( ' + value + ' )')
    return this
  },

  removeLink(position) {
    let num = 2;
    if (position <= 0 || position > this.str.length || typeof (position) !== typeof (num)) {
      this.str.splice(0, this.str.length)
      throw new Error("You can't remove incorrect link!");

    }
    else {
      this.str.splice(position - 1, 1)
      return this
    }

  },
  reverseChain() {
    this.str.reverse()
    return this
  },
  finishChain() {
    const res = String(this.str.join('~~'))
    this.str.splice(0, this.str.length)

    return res


  }
};

module.exports = {
  chainMaker
};
