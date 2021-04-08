/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const res = {};
  domains.forEach((domain) => {
    let value = '';
    const arr = domain.split('.');
    for (let i = arr.length - 1; i >= 0; i--) {
      value += `.${arr[i]}`;
      if (!res[value]) {
        res[value] = 1;
      } else {
        res[value] += 1;
      }
    }
  });
  return res;
}

module.exports = getDNSStats;
