/*

输入一个链表，从尾到头打印链表每个节点的值。


 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function printListFromTailToHead(head)
{
		
		if(!head){return []}
		var temp = [] //缓存链表的每个值
    while(head.next != null){
    	  // 隐形要求这个是个栈
    		temp.unshift(head.val)
    		head = head.next
    }
    temp.unshift(head.val)

    return temp
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};