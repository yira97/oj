/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const nums1_cp = nums1.slice(0, m);

  let i = 0,
    j = 0;
  for (let p = 0; p < nums1.length; p++) {
    if (i < m) {
      if (j < n) {
        if (nums1_cp[i] <= nums2[j]) {
          nums1[p] = nums1_cp[i];
          i++;
        } else {
          nums1[p] = nums2[j];
          j++;
        }
      } else {
        nums1[p] = nums1_cp[i];
        i++;
      }
    } else {
      nums1[p] = nums2[j];
      j++;
    }
  }
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

merge([1], 1, [], 0);

merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
