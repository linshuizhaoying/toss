/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
		var current = pHead
    while(current.next!=null){
        current.flag = true;
        if(current.next.flag==true){
            return current.next;
        }
        current = current.next;
    }
    return null;
}
module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};