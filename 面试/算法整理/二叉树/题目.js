// 1.重建二叉树
/*

输入某二叉树的前序遍历和中序遍历的结果
请重建出该二叉树。
假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，
则重建二叉树并返回。


 */

/*思路:
先取pre首元素作为根节点root，在in中找到pre首元素，其左的构成左子树，其右的构成右子树；
再对其左，其右分别递归调用上述过程

*/

// 答案:

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
     if (!pre || pre.length === 0) {
        return;
    }
    var treeNode = {
        val: pre[0]
    }
    for(var i = 0; i < pre.length; i++) {
        if (vin[i] === pre[0]) {
            treeNode.left = reConstructBinaryTree(pre.slice(1, i+1), vin.slice(0, i));
            treeNode.right = reConstructBinaryTree(pre.slice(i+1),vin.slice(i+1));
        }
    }
    return treeNode;
    console.log(treeNode)
}















