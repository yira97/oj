/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let r = nums.length - 1,
    l = 0;
  while (true) {
    const m = l + Math.floor((r - l) / 2);

    if (nums[m] === target) {
      return m;
    }
    // [..., 1, (2), 3, ...] A: m, B: m+1
    // [(1), 2, ...] A: m, B: m+1
    // [..., 2, (3)] A: m, B: m+1
    if (target < nums[m]) {
      if (m === 0 || nums[m - 1] < target) {
        return m;
      }
      r = m - 1;
    } else {
      if (m === nums.length - 1 || m < nums[m + 1]) {
        return m + 1;
      }
      l = m + 1;
    }
  }
};

searchInsert([1, 3, 5, 6], 7);
