/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  // 65 A
  // 90 Z

  let remain = columnNumber;
  let s = "";
  do {
    // 计算元素
    const idx = (remain - 1) % 26;
    // 最低位最先算出，放在最右边。
    s = String.fromCharCode(65 + idx) + s;

    // 这道题与单纯的进位是不同的，因为这个表示方法没有0位
    remain = Math.floor((remain - 1) / 26);
  } while (remain);
  return s;
};

// convertToTitle(26) === 'Z'
convertToTitle(27) === "AA";
convertToTitle(28) === "AB";
