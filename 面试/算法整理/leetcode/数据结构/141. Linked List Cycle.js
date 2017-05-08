/*

Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?

 */

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
// 判断一个链表是不是环
var hasCycle = function(head) {
    if(!head){ return false}
    ListNode walk =head;
    ListNode runner = head;
    while(runner.next != null && runner.next.next !=null){
    	walk = walk.next
    	runner = runner.next.next
    	if(walk == runner){return true}
    }
    return false
};