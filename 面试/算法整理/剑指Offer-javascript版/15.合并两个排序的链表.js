/*
输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
    if (pHead1 == null) {
        return pHead2
    }
    if (pHead2 == null) {
        return pHead1
    }
    var merged = null
    if (pHead1.val <= pHead2.val) {
        merged = pHead1
        merged.next = Merge(pHead1.next, pHead2)
    } else {
        merged = pHead2
        merged.next = Merge(pHead1, pHead2.next)
    }
    return merged
}
module.exports = {
    Merge: Merge
};
