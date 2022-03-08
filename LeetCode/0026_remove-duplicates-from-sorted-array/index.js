/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 2) return nums.length;

  // [0,0,1,2,2,3,3,4]
  let d = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      let p = i;
      while (p < nums.length - 1 && nums[p + 1] === nums[p]) {
        p++;
      }
      const n = p - i + 1;
      d += n;
      nums.splice(i, n);
    }
  }

  return nums.length;
};
