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
  let result = '';
  let count = 1;
  let prev = str[0];

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === prev) {
      count++;
    } else {
      result += count > 1 ? count + prev : prev;
      count = 1;
      prev = str[i];
    }
  }
  return result;
}
module.exports = {
  encodeLine
};
