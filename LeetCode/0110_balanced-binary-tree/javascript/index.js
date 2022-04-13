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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  const info = { max: 0 };
  countLevel(root, info);
  return info.max <= 1;
};

const countLevel = (root, info) => {
  let left = root.left ? countLevel(root.left, info) : -1;
  let right = root.right ? countLevel(root.right, info) : -1;
  const diff = Math.abs(right - left);
  if (diff > info.max) {
    info.max = diff;
  }

  if (left > right) {
    return left + 1;
  } else {
    return right + 1;
  }
};
