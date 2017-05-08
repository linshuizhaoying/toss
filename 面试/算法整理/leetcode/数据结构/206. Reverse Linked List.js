/*

Reverse a singly linked list.


 */
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 这是迭代写法，最快
var reverseList = function(head) {
    //这题之前好像做过
    //大概思路就是用额外的一个空间来帮助
    if (!head) {
        return []}
    var pre = null
    var cur = head
    var next = null
    while (cur) {
        next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
};

// 这是递归写法
var reverseList = function(head, prev = null) {
    if (!head) return prev;
    
    let newHead = head.next;
    let oldPrev = prev;
    
    prev = head;
    prev.next = oldPrev;
   
    return reverseList(newHead, prev);
};

// 也有利用结构函数新特性来写的，但是不建议使用，因为它非常慢
var reverseList = function(head) {
    var prev = null
    while (head) 
         [head.next, head, prev] = [prev, head.next, head]
    
    return prev ;
};