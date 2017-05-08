/*

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 合并已排序链表
var mergeTwoLists = function(l1, l2) {
    if (l1 == null) {
        return l2
    }
    if (l2 == null) {
        return l1
    }
    var merged = null
    if (l1.val <= l2.val) {
        merged = l1
        merged.next = mergeTwoLists(l1.next, l2)
    } else {
        merged = l2
        merged.next = mergeTwoLists(l1, l2.next)
    }
    return merged 
};