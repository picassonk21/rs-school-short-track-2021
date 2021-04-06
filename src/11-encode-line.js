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
  let subStr = str[0];
  const res = [];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      const num = subStr.length > 1 ? subStr.length : '';
      res.push(num + subStr[0]);
      subStr = str[i];
    } else {
      subStr += str[i];
    }
  }
  if (subStr) {
    const num = subStr.length > 1 ? subStr.length : '';
    res.push(num + subStr[0]);
  }
  return res.join('');
}

module.exports = encodeLine;
