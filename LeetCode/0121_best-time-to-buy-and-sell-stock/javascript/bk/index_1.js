/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // ith-day hold || ith-day not hold
  // [-7, 0];
  // [-1, 0];
  // [-1, 4];
  //      ^

  const tbl = [[-prices[0], 0]];
  for (let i = 1; i < prices.length; i++) {
    const today = tbl[i - 1].slice(0);
    if (-prices[i] > today[0]) {
      today[0] = -prices[i];
    }
    if (prices[i] + today[0] > today[1]) {
      today[1] = prices[i] + today[0];
    }
    tbl.push(today);
  }

  return tbl[tbl.length - 1][1];
};

maxProfit([1, 2]);

//maxProfit([7,1,5,3,6,4])
