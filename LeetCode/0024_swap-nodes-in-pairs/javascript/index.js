/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let entry = head;
  let before = null;

  if (entry && entry.next) {
    head = head.next;
  }

  while (entry && entry.next) {
    const first = entry;
    const second = entry.next;
    const neibor = second.next;

    first.next = neibor;
    second.next = first;
    entry = second;
    if (before) {
      before.next = entry;
    }
    before = entry.next;
    entry = before.next;
  }

  return head;
};
