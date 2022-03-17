/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let _in = nums[0];
  let out = Number.NEGATIVE_INFINITY;
  for (let i = 1; i < nums.length; i++) {
    out = _in > out ? _in : out;
    _in = _in + nums[i] >= nums[i] ? _in + nums[i] : nums[i];
  }
  return _in > out ? _in : out;
};

console.log(maxSubArray([-1, -2]));
