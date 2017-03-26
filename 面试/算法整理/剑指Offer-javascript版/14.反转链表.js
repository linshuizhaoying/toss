/*

 输入一个链表，反转链表后，输出链表的所有元素。

 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    if (!pHead) {
        return
    }
    var pre = null
    var cur = pHead
    var next = null
    while (cur) {
        next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}
module.exports = {
    ReverseList: ReverseList
};
