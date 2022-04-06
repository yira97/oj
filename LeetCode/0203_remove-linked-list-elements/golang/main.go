package main

// Definition for singly-linked list.
type ListNode struct {
	Val  int
	Next *ListNode
}

func removeElements(head *ListNode, val int) *ListNode {
	// 先站到一个合法元素上
	for head != nil && head.Val == val {
		head = head.Next
	}

	if head == nil {
		return nil
	}

	curr := head

	for curr.Next != nil {
		next := curr.Next
		if next.Val == val {
			curr.Next = next.Next
		} else {
			curr = curr.Next
		}
	}

	return head
}
