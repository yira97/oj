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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];

  const r = [];
  inorderTraversalImpl(root, r);
  return r;
};

const inorderTraversalImpl = (root, res) => {
  if (root.left) {
    inorderTraversalImpl(root.left, res);
  }

  res.push(root.val);

  if (root.right) {
    inorderTraversalImpl(root.right, res);
  }
};
