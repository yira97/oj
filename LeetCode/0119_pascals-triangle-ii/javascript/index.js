const generate = (numRows) => {
  const res = [[1]];

  for (let i = 1; i < numRows; i++) {
    const row = [1];
    for (let j = 1; j < res[i - 1].length; j++) {
      row.push(res[i - 1][j - 1] + res[i - 1][j]);
    }
    row.push(1);
    res.push(row);
  }

  return res;
};
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const g = generate(rowIndex + 1);
  return g[rowIndex];
};
