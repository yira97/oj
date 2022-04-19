package leetcode

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func binaryTreePaths(root *TreeNode) []string {
	s := fmt.Sprintf("%d", root.Val)
	res := make([]string, 0)

	if root.Left == nil && root.Right == nil {
		res = append(res, s)
		return res
	}

	if root.Left != nil {
		binaryTreePathsImpl(root.Left, s, &res)
	}

	if root.Right != nil {
		binaryTreePathsImpl(root.Right, s, &res)
	}

	return res
}

func binaryTreePathsImpl(root *TreeNode, s string, res *[]string) {
	s = fmt.Sprintf("%s->%d", s, root.Val)

	if root.Left == nil && root.Right == nil {
		*res = append(*res, s)
		return
	}

	if root.Left != nil {
		binaryTreePathsImpl(root.Left, s, res)
	}

	if root.Right != nil {
		binaryTreePathsImpl(root.Right, s, res)
	}
}
