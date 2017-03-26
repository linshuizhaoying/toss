/*


输入两个链表，找出它们的第一个公共结点。

 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/*

 假定 List1长度: a+n  List2 长度:b+n, 且 a<b
 那么 p1 会先到链表尾部, 这时p2 走到 a+n位置,将p1换成List2头部
 接着p2 再走b+n-(n+a) =b-a 步到链表尾部,这时p1也走到List2的b-a位置，还差a步就到可能的第一个公共节点。
 将p2 换成 List1头部，p2走a步也到可能的第一个公共节点。如果恰好p1==p2,那么p1就是第一个公共节点。  或者p1和p2一起走n步到达列表尾部，二者没有公共节点，退出循环。 同理a>=b.
 时间复杂度O(n+a+b)
         

 */
function FindFirstCommonNode(pHead1, pHead2)
{
    var p1 = pHead1;
    var p2 = pHead2;
    while(p1!=p2){
        p1= (p1==null?pHead2:p1.next);
        p2= (p2==null?pHead1:p2.next);
    }
    return p1;
}
module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
};