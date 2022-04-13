/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;

  let s1 = head;
  let s2 = head;
  while (true) {
    if (s1) {
      s1 = s1.next;
    }
    if (s2) {
      s2 = s2.next;
    }
    if (s2) {
      s2 = s2.next;
    }
    // console.log(s1,s2)
    if (!s1 || !s2) {
      return false;
    }
    if (s2.val === s1.val && s1.next === s2.next) {
      return true;
    }
  }
};
