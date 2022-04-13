/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  const tbl = Array.from({ length: nums.length }, () => ({}));

  tbl[0].in = { v: nums[0] };
  tbl[0].out = null;
  for (let i = 1; i < nums.length; i++) {
    if (tbl[i - 1].in.v + nums[i] >= nums[i]) {
      tbl[i].in = Object.assign({}, tbl[i - 1].in);
      tbl[i].in.v = tbl[i].in.v + nums[i];
    } else {
      tbl[i].in = { v: nums[i] };
    }

    if (!tbl[i - 1].out || tbl[i - 1].in.v > tbl[i - 1].out.v) {
      tbl[i].out = Object.assign({}, tbl[i - 1].in);
    } else {
      tbl[i].out = tbl[i - 1].out;
    }
  }
  const last = tbl[tbl.length - 1];
  return Math.max(last.in.v, last.out.v);
};
