/*

在一个排序的链表中，存在重复的结点，
请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 
例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead) {
    if (pHead == null) return null
    if (pHead != null && pHead.next == null) return pHead

    var curr = pHead
    if (pHead.next.val == pHead.val) {
        curr = pHead.next.next
        while (curr != null && curr.val == pHead.val) {
            curr = curr.next
        }
        return deleteDuplication(curr)
    } else {
        curr = pHead.next
        pHead.next = deleteDuplication(curr)
        return pHead
    }
}
module.exports = {
    deleteDuplication: deleteDuplication
};
