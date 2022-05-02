const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let newArr = new Array()
  let arr2 = new Array()
  let nicK = ''
  let strEx = 'x'
  if (members === null || members === undefined) return false
  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) === typeof (strEx)) {
      newArr.push(members[i])
    }


  }
  for (let k = 0; k < newArr.length; k++) {
    arr2.push(newArr[k].trim().toUpperCase())
  }
  arr2.sort()
  for (let j = 0; j < arr2.length; j++) {
    nicK += arr2[j][0]
  }
  return nicK
}

module.exports = {
  createDreamTeam
};
