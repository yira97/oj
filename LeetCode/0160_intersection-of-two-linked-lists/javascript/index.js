/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const countNode = (root) => {
  if (!root) return 0;

  let count = 0;
  while (root) {
    count++;
    root = root.next;
  }
  return count;
};
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const n1 = countNode(headA);
  const n2 = countNode(headB);

  let diff;
  let longHead;
  let shortHead;
  if (n1 > n2) {
    diff = n1 - n2;
    longHead = headA;
    shortHead = headB;
  } else {
    diff = n2 - n1;
    longHead = headB;
    shortHead = headA;
  }

  while (diff > 0) {
    longHead = longHead.next;
    diff--;
  }

  while (shortHead) {
    if (shortHead === longHead) {
      return shortHead;
    }
    shortHead = shortHead.next;
    longHead = longHead.next;
  }
  return null;

  // let latestNode = null;
  // while(shortHead) {
  //     if (shortHead.val === longHead.val) {
  //         if (latestNode === null) {
  //             latestNode = shortHead;
  //         }
  //     } else {
  //         latestNode = null;
  //     }
  //     shortHead = shortHead.next;
  //     longHead = longHead.next;
  // }
  //
  // return latestNode;
};
