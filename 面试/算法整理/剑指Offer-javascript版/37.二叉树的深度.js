/*

输入一棵二叉树，求该树的深度。
从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，
最长路径的长度为树的深度。

 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot) {
    if (pRoot == null) {
        return 0
    }
    var left = TreeDepth(pRoot.left)
    var right = TreeDepth(pRoot.right)

    return (left > right) ? left + 1 : right + 1

}
module.exports = {
    TreeDepth: TreeDepth
};
