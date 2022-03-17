/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  const tbl = Array.from({ length: nums.length }, () => new Array(2));

  tbl[0][0] = nums[0];
  tbl[0][1] = Number.NEGATIVE_INFINITY;
  for (let i = 1; i < nums.length; i++) {
    tbl[i][0] =
      tbl[i - 1][0] + nums[i] >= nums[i] ? tbl[i - 1][0] + nums[i] : nums[i];
    tbl[i][1] = tbl[i - 1][0] > tbl[i - 1][1] ? tbl[i - 1][0] : tbl[i - 1][1];
  }
  return tbl[tbl.length - 1][0] > tbl[tbl.length - 1][1]
    ? tbl[tbl.length - 1][0]
    : tbl[tbl.length - 1][1];
};
