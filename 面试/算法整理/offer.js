//1

function replaceSpace(string){

		return string.replace(/[ ]/g, "%20")

}



//2  从尾到头，即先进后出，使用栈

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    var res=[];
    while(head){
        res.unshift(head.val);
        head=head.next;
    }
    return res;
}