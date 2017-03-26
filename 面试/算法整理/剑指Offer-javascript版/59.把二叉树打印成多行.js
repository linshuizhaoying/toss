/*

从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
   var res=[]
    if(!pRoot)return res
    var q=[]
    q.push(pRoot)
     
    while(q.length!=0){
        var l=0
        var h=q.length
        var arr=[]
        while(l++<h){
            var t=q.shift()
             
            arr.push(t.val)
            if(t.left)q.push(t.left)
            if(t.right)q.push(t.right)
        }
        res.push(arr)
    }
    return res
}
module.exports = {
    Print : Print
};