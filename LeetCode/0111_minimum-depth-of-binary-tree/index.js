/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  const info = {};
  findMinDepth(root, 1, info);
  return info.min;
};

const findMinDepth = (root, depth, info) => {
  if (!root.left && !root.right) {
    if (depth < info.min || !info.min) {
      info.min = depth;
    }
    return;
  }
  if (root.right) {
    findMinDepth(root.right, depth + 1, info);
  }
  if (root.left) {
    findMinDepth(root.left, depth + 1, info);
  }
};
