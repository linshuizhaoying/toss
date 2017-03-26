/*

请实现一个函数，用来判断一颗二叉树是不是对称的。
注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot)
{
    if(pRoot == null){
    	return true
    }
    return check(pRoot.left,pRoot.right)
}
function check(t1,t2){
	if(t1 == null && t2 == null){
		return true
	}
	if(t1 !=null && t2!=null){
		return t1.val == t2.val && check(t1.left,t2.right) && check(t1.right,t2.left)
	}
	return false
}
module.exports = {
    isSymmetrical : isSymmetrical
};