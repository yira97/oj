/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let v = nums[0];
  for (let i = 1; i < nums.length; i++) {
    v ^= nums[i];
  }
  return v;
};
