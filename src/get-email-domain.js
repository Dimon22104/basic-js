const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  email = email.split('')
  let res
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      res = email.slice(i + 1)
    }
  }

  return res.join('')
}

module.exports = {
  getEmailDomain
};
