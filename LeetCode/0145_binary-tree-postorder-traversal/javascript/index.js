/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const postorderTraversalImpl = (root, res) => {
  if (root.left) {
    postorderTraversalImpl(root.left, res);
  }
  if (root.right) {
    postorderTraversalImpl(root.right, res);
  }
  res.push(root.val);
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];

  const res = [];
  postorderTraversalImpl(root, res);
  return res;
};
