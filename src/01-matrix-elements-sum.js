/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

const sum = (arr, zeros) => {
  let res = 0;
  const zeroInd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroInd.push(i);
    } else if (!zeros.includes(i)) {
      res += arr[i];
    }
  }
  return [res, zeroInd];
};

function getMatrixElementsSum(matrix) {
  let result = 0;
  let zeroInd = [];
  for (let i = 0; i < matrix.length; i++) {
    let res = 0;
    [res, zeroInd] = sum(matrix[i], zeroInd);
    result += res;
  }
  return result;
}

module.exports = getMatrixElementsSum;
