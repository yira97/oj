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
  let wallet = -prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] + wallet > profit) {
      profit = prices[i] + wallet;
    }
    if (-prices[i] > wallet) {
      wallet = -prices[i];
    }
  }

  return profit;
};
