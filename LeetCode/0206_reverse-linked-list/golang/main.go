package main

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
func reverseList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	revHead := head
	head = head.Next
	revHead.Next = nil
	last := head

	for head.Next != nil {
		head = head.Next
		last.Next = revHead
		revHead = last
		last = head
	}
	head.Next = revHead
	revHead = head

	return revHead
}
