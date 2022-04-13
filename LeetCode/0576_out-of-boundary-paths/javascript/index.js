/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const isOut = (m, n, row, col) => {
    if (row < 0 || row >= m) return true;
    if (col < 0 || col >= n) return true;
    return false;
  };

  const leastStep = (m, n, row, col) => {
    return Math.min(row - 0 + 1, m - row, col - 0 + 1, n - col);
  };

  let count = BigInt(0);

  let ts = [{ row: startRow, col: startColumn, base: BigInt(1) }];
  for (let i = 1; i <= maxMove; i++) {
    const positions = ts.reduce((remindPositions, pos) => {
      const left = { ...pos, col: pos.col - 1 };
      const right = { ...pos, col: pos.col + 1 };
      const up = { ...pos, row: pos.row - 1 };
      const down = { ...pos, row: pos.row + 1 };

      const remindSteps = maxMove - i;

      [left, right, up, down]
        .filter((newPos) => {
          if (isOut(m, n, newPos.row, newPos.col)) {
            count += BigInt(newPos.base);
            return false;
          }
          return true;
        })
        .filter(
          (newPos) => remindSteps >= leastStep(m, n, newPos.row, newPos.col)
        )
        .filter((newPos) => {
          const found = remindPositions.find(
            (remindPos) =>
              remindPos.row === newPos.row && remindPos.col === newPos.col
          );
          if (found !== undefined) {
            found.base += newPos.base;
            return false;
          }
          return true;
        })
        .forEach((newPos) => remindPositions.push(newPos));
      return remindPositions;
    }, []);
    ts = positions;
  }

  return count % BigInt(Math.pow(10, 9) + 7);
};
