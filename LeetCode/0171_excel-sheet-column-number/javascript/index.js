/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let level = 0;
  let result = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    // 65 A
    // 90 Z
    const n = columnTitle.charCodeAt(i) - 64;
    result += n * Math.pow(26, level);
    level++;
    // level 可以不用定义，利用 i 即可
  }
  return result;
};
