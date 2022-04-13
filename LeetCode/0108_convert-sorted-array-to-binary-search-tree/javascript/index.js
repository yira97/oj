/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  let i = (nums.length - 1) >> 1;
  const root = new TreeNode(nums[i]);
  sortedArrayToBSTImpl(nums, 0, i - 1, root);
  sortedArrayToBSTImpl(nums, i + 1, nums.length - 1, root);

  return root;
};

const sortedArrayToBSTImpl = (nums, left, right, root) => {
  const diff = right - left;
  if (diff === 0) {
    treeAdd(root, nums[left]);
    return;
  } else if (diff < 0) {
    return;
  }

  let i = left + (diff >> 1);
  treeAdd(root, nums[i]);

  sortedArrayToBSTImpl(nums, left, i - 1, root);
  sortedArrayToBSTImpl(nums, i + 1, right, root);
};

const treeAdd = (root, num) => {
  if (root.val > num) {
    // insert into left tree
    if (!root.left) {
      root.left = new TreeNode(num);
    } else {
      treeAdd(root.left, num);
    }
  } else {
    // insert into right tree
    if (!root.right) {
      root.right = new TreeNode(num);
    } else {
      treeAdd(root.right, num);
    }
  }
};
