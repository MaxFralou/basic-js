const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  const ignore = [];

  let i = 0;
  while (i < arr.length) {
    const current = arr[i];

    if (current === '--discard-next') {
      ignore.push(i + 1);
      i += 2;
    } else if (current === '--discard-prev') {
      if (result.length !== 0 && !ignore.includes(i - 1)) {
        result.pop();
      }
      i++;
    } else if (current === '--double-next') {
      if (i !== arr.length - 1) {
        result.push(arr[i + 1]);
      }
      i++;
    } else if (current === '--double-prev') {
      if (i !== 0 && !ignore.includes(i - 1)) {
        result.push(arr[i - 1]);
      }
      i++;
    } else {
      result.push(current);
      i++;
    }
  }

  return result;
}


module.exports = {
  transform
};
