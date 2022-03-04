/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // f(0) = 1
  // f(1) = 1
  // f(2) = f(1) + f(0)
  // f(3) = f(1) + f(2)
  // f(4) = f(2) + f(3)

  let tbl = Array.from({ length: n + 1 }, () => 0);
  tbl[0] = 1;
  tbl[1] = 1;
  for (let i = 2; i < tbl.length; i++) {
    tbl[i] += tbl[i - 1] + tbl[i - 2];
  }
  return tbl[tbl.length - 1];
};
