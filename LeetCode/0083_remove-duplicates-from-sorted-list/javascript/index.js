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
var deleteDuplicates = function (head) {
  if (!head) return null;
  if (head.next === null) return head;

  const viewed = new Set();
  const r_head = new ListNode(head.val);
  let r_move = r_head;
  viewed.add(r_head.val);

  let curr = head.next;
  while (curr) {
    if (viewed.has(curr.val)) {
      curr = curr.next;
      continue;
    }
    const n = new ListNode(curr.val);
    viewed.add(n.val);
    r_move.next = n;
    r_move = r_move.next;
  }
  return r_head;
};
