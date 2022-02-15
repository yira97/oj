const maxDepthImpl = (root, depth = 1) => {
    if (!root || (!root.left && !root.right)) return depth;
    return Math.max(maxDepthImpl(root.left, depth + 1), maxDepthImpl(root.right, depth + 1));
}

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
var maxDepth = function(root) {
    if (!root) return 0;
    return maxDepthImpl(root)
};