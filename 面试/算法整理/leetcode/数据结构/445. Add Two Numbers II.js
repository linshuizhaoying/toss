/*

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

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
var addTwoNumbers = function(l1, l2) {
        var s1 = [];
        var s2 = [];

        while(l1 !== null) {
            s1.push(l1.val);
            l1 = l1.next;
        }
        while(l2 !== null) {
            s2.push(l2.val);
            l2 = l2.next;
        }
        
        var sum = 0;
        var list = new ListNode(0);
        while(s1.length > 0 || s2.length > 0) {
            if(s1.length > 0) sum += s1.pop();
            if(s2.length > 0) sum += s2.pop();
            list.val = sum % 10;
            var head = new ListNode((sum / 10)>>0);
            head.next = list;
            list = head;
            sum = (sum / 10) >> 0;
        }
        return list.val === 0 ? list.next : list;    
};