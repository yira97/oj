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
var isSymmetric = function (root) {
  const left_seq = [root.left];
  const right_seq = [root.right];

  while (left_seq.length && right_seq.length) {
    const comp_l = left_seq.shift();
    const comp_r = right_seq.pop();
    if (!comp_l && !comp_r) {
      continue;
    }
    if ((comp_l && !comp_r) || (!comp_l && comp_r)) {
      return false;
    }
    if (comp_l.val !== comp_r.val) {
      return false;
    }
    left_seq.push(comp_l.left);
    left_seq.push(comp_l.right);
    right_seq.unshift(comp_r.right);
    right_seq.unshift(comp_r.left);
  }
  return true;
};
