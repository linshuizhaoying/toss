/*

Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.

 */

var deleteDuplicates = function(head) {
   if(head == null || head.next == null)return head;
        head.next = deleteDuplicates(head.next);
        return head.val == head.next.val ? head.next : head;
};


  var history = [];
  var current = head;
  var previous = null;
  while(current){
      if(history.indexOf(current.val) >= 0){
        previous.next = current.next;
      }else{
        history.push(current.val);
        previous = current;
      }
      current = current.next 
  }
  
  return head;