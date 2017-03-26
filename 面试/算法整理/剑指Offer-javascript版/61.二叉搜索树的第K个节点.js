/*

给定一颗二叉搜索树，请找出其中的第k大的结点。
例如， 5 / \ 3 7 /\ /\ 2 4 6 8 中，按结点数值大小顺序第三个结点的值为4。

//中序递归
然后找到
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
   if(k <= 0 || pRoot == null){
        return null;
    }
    var aid = [];
    function mInorder(pRoot,k){
        // while(aid.length-1 < k){
            if(pRoot.left != null){
                mInorder(pRoot.left,k);
            }
            aid.push(pRoot);
            if(pRoot.right != null){
                mInorder(pRoot.right,k)
            }
       // }
    }
    mInorder(pRoot,k)
    return aid[k-1];
    // write code here
}
module.exports = {
    KthNode : KthNode
};