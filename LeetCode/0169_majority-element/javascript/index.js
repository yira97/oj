/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const m = {};
  let n_max = null;
  let n_max_count = 0;

  for (const n of nums) {
    m[n] = (m[n] ?? 0) + 1;
    if (m[n] > n_max_count) {
      n_max = n;
      n_max_count = m[n];
    }
  }

  return n_max;
};

majorityElement([3, 2, 3]);
