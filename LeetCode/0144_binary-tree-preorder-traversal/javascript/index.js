/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const preorderTraversalImpl = (root, res) => {
  res.push(root.val);
  if (root.left) {
    preorderTraversalImpl(root.left, res);
  }
  if (root.right) {
    preorderTraversalImpl(root.right, res);
  }
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];

  const res = [];
  preorderTraversalImpl(root, res);
  return res;
};
