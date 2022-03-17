/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  const tbl = Array.from({ length: nums.length }, () => new Array(1));

  tbl[0][0] = nums[0];
  let out = Number.NEGATIVE_INFINITY;
  for (let i = 1; i < nums.length; i++) {
    tbl[i][0] =
      tbl[i - 1][0] + nums[i] >= nums[i] ? tbl[i - 1][0] + nums[i] : nums[i];
    out = tbl[i - 1][0] > out ? tbl[i - 1][0] : out;
  }
  return tbl[tbl.length - 1][0] > out ? tbl[tbl.length - 1][0] : out;
};
