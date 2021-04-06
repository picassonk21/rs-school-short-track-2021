/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(/* matrix */) {
  // let copy = [];
  // matrix.forEach((arr) => {
  //   arr.forEach((el) => {
  //     copy.push(el);
  //   });
  // });
  // copy = copy.map((el) => {
  //   if (!el) {
  //     return 0;
  //   }
  //   return el;
  // });
  // for (let i = 0; i < copy.length; i++) {
  //   if (copy[i] === true) {
  //     if (i % 3 === 0) {
  //       if (copy[i - 3] !== undefined && typeof copy[i - 3] === 'number') {
  //         copy[i - 3] += 1;
  //       }
  //       if (copy[i - 2] !== undefined && typeof copy[i - 2] === 'number') {
  //         copy[i - 2] += 1;
  //       }
  //       if (copy[i + 1] !== undefined && typeof copy[i + 1] === 'number') {
  //         copy[i + 1] += 1;
  //       }
  //       if (copy[i + 3] !== undefined && typeof copy[i + 3] === 'number') {
  //         copy[i + 3] += 1;
  //       }
  //       if (copy[i + 4] !== undefined && typeof copy[i + 4] === 'number') {
  //         copy[i + 4] += 1;
  //       }
  //     }
  //     if (i % 3 === 1) {
  //       if (copy[i - 4] !== undefined && typeof copy[i - 4] === 'number') {
  //         copy[i - 4] += 1;
  //       }
  //       if (copy[i - 3] !== undefined && typeof copy[i - 3] === 'number') {
  //         copy[i - 3] += 1;
  //       }
  //       if (copy[i - 2] !== undefined && typeof copy[i - 2] === 'number') {
  //         copy[i - 2] += 1;
  //       }
  //       if (copy[i - 1] !== undefined && typeof copy[i - 1] === 'number') {
  //         copy[i - 1] += 1;
  //       }
  //       if (copy[i + 1] !== undefined && typeof copy[i + 1] === 'number') {
  //         copy[i + 1] += 1;
  //       }
  //       if (copy[i + 2] !== undefined && typeof copy[i + 2] === 'number') {
  //         copy[i + 2] += 1;
  //       }
  //       if (copy[i + 3] !== undefined && typeof copy[i + 3] === 'number') {
  //         copy[i + 3] += 1;
  //       }
  //       if (copy[i + 4] !== undefined && typeof copy[i + 4] === 'number') {
  //         copy[i + 4] += 1;
  //       }
  //     }
  //     if (i % 3 === 2) {
  //       if (copy[i - 4] !== undefined && typeof copy[i - 4] === 'number') {
  //         copy[i - 4] += 1;
  //       }
  //       if (copy[i - 3] !== undefined && typeof copy[i - 3] === 'number') {
  //         copy[i - 3] += 1;
  //       }
  //       if (copy[i - 1] !== undefined && typeof copy[i - 1] === 'number') {
  //         copy[i - 1] += 1;
  //       }
  //       if (copy[i + 2] !== undefined && typeof copy[i + 2] === 'number') {
  //         copy[i + 2] += 1;
  //       }
  //       if (copy[i + 3] !== undefined && typeof copy[i + 3] === 'number') {
  //         copy[i + 3] += 1;
  //       }
  //     }
  //   }
  // }
  // copy = copy.map((el) => {
  //   if (el === true) {
  //     return 1;
  //   }
  //   return el;
  // });
  // const res = [];
  // for (let i = 0; i < copy.length; i += 3) {
  //   res.push(copy.slice(i, i + 3));
  // }
  // return res;
  throw new Error('Not implemented');
}

module.exports = minesweeper;
