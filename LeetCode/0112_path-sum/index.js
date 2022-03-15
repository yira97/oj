/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const hasPathSumImpl = function (root, targetSum) {
  const remain = targetSum - root.val;

  if (remain === 0 && !root.left && !root.right) return true;
  let ok = false;
  if (root.left) ok = hasPathSumImpl(root.left, remain);
  if (!ok && root.right) ok = hasPathSumImpl(root.right, remain);
  return ok;
};

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  return hasPathSumImpl(root, targetSum);
};
