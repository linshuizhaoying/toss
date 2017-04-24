/*
Given a singly linked list, determine if it is a palindrome.


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

/*

This can be solved by reversing the 2nd half and compare the two halves. Let's start with an example [1, 1, 2, 1].

In the beginning, set two pointers fast and slow starting at the head.

1 -> 1 -> 2 -> 1 -> null 
sf
(1) Move: fast pointer goes to the end, and slow goes to the middle.

1 -> 1 -> 2 -> 1 -> null 
          s          f
(2) Reverse: the right half is reversed, and slow pointer becomes the 2nd head.

1 -> 1    null <- 2 <- 1           
h                      s
(3) Compare: run the two pointers head and slow together and compare.

1 -> 1    null <- 2 <- 1             
     h            s

 */
// 参考思路是用两个指针，然后一个每次走一步，一个走两步
// 等走得快到底，走得慢到链表中间
// 
var isPalindrome = function(head) {
    if(head === null) return true;
    if(head.next === null) return true;
    
    var slowptr = head;
    var fastptr = head;
    var leftptr = head;
    var rightptr;
    
    while(fastptr && fastptr.next) {
        slowptr = slowptr.next;
        fastptr = fastptr.next;
        if(fastptr && fastptr.next) fastptr = fastptr.next;
    }
    
    rightptr = reverse(slowptr);
    
    while(rightptr) {
        if(rightptr.val != leftptr.val) return false;
        leftptr = leftptr.next ? leftptr.next : null;
        rightptr = rightptr.next ? rightptr.next : null;
    }
    return true;
 };
 
 var reverse = function(head){
     var current = head;
     var next;
     var prev;
     
     while(current) {
         next = current.next;
         current.next = prev;
         prev = current;
         current = next;
     }
     
     return prev;
 }