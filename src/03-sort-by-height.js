/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let heights = arr.filter((height) => height !== -1);
  heights = heights.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      heights.splice(i, 0, -1);
    }
  }
  return heights;
}

module.exports = sortByHeight;
