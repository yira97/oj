package leetcode

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val   int
 *     Left  *TreeNode
 *     Right *TreeNode
 * }
 */

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	// a 是 b 的祖先 -> 返回a
	// a 不是 b 的祖先 -> 返回common祖先

	// ex1
	// - a 小于 curr， b 大于 curr -> 返回 curr

	// ex2
	// - a 和 b 都小于 curr，移动 curr
	// - curr 等于 a 或 b 其中之一， 返回curr

	if root.Val < p.Val && root.Val > q.Val || root.Val > p.Val && root.Val < q.Val || root.Val == p.Val || root.Val == q.Val {
		return root
	}

	if root.Val < p.Val && root.Val < q.Val {
		root = root.Right
	} else {
		root = root.Left
	}

	return lowestCommonAncestor(root, p, q)
}
