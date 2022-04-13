/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let p = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== val) {
      nums[p] = nums[i];
      p++;
    }
    i++;
  }
  nums.length = p;
};
