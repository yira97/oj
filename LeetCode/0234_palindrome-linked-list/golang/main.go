package leetcode

type ListNode struct {
	Val  int
	Next *ListNode
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func isPalindrome(head *ListNode) bool {
	nums := make([]int, 0)

	curr := head
	for curr != nil {
		nums = append(nums, curr.Val)
		curr = curr.Next
	}

	l := len(nums)
	half := l / 2
	for i := 0; i < half; i++ {
		if nums[i] != nums[l-i-1] {
			return false
		}
	}
	return true
}
