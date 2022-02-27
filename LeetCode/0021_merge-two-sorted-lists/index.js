/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let head = null;
    let curr = null;
    
    while (list1 || list2) {
            const firstSmaller = (!list2 || list1 && list2 && list1.val < list2.val)
            
            const node = new ListNode(firstSmaller ? list1.val : list2.val);
            
            if (head === null) {
                head = node;
                curr = head;
            } else {
                curr.next = node;
                curr = curr.next;
            }
            
            if (firstSmaller) {
                list1 = list1.next;
            } else {
                list2 = list2.next;
            }
    } 
    
    return head;
};