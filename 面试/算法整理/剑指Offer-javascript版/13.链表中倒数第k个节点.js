/*
输入一个链表，输出该链表中倒数第k个结点。
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
    if (!head) {
        return
    }
    var temp = []
    while (head) {
        temp.push(head)
        head = head.next
    }
    temp = temp.reverse()
    return temp[k - 1]
}
module.exports = {
    FindKthToTail: FindKthToTail
};
