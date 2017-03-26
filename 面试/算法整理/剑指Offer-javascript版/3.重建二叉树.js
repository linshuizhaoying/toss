/*

输入某二叉树的前序遍历和中序遍历的结果，
请重建出该二叉树。
假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列{1,2,4,7,3,5,6,8}
和中序遍历序列{4,7,2,1,5,3,8,6}，
则重建二叉树并返回。

 */

/*

重建二叉树的前置知识：

0、遍历二叉树：

（1）前序遍历：根左右 --> 先访问根节点，再前序遍历左子树，最后前序遍历右子树；

（2）中序遍历：左根右 --> 先中序遍历左子树，再访问根节点，最后中序遍历右子树。

（3）后序遍历：左右根 --> 先后序遍历左子树，再后序遍历右子树，组后访问根节点。

1、重建二叉树：

（1）前序+中序：前序遍历序列和中序遍历序列可以确定唯一的二叉树

（2）中序+后序：中序遍历序列和后序遍历序列可以确定唯一的二叉树

2、构建整个二叉树和构建子二叉树的过程相同。

分析题目中给的
例如输入前序遍历序列{1,2,4,7,3,5,6,8}
和中序遍历序列{4,7,2,1,5,3,8,6}，
根据前序遍历特点 pre[0] 1 等于根节点
在中序遍历中找到1的位置 inner[i] = 1 找到 i = 3

[4,7,2,1] 在 1 的左边，是二叉树的左子树
[5,3,8,6] 在 1 的右边，是二叉树的右子树
此时
  					  1
  	[4,7,2,1]		[5,3,8,6]		
pre[1]是左子树的根节点值是2，同理去中序遍历中找到它的位置 inner[i] = 2
依次循环最终得到
							1
						2   3
					4   5		6 
						7		8				
 
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6])
function reConstructBinaryTree(pre, vin)
{
       // 判断临界点，pre已经没有元素了
    if (!pre || pre.length === 0) {
        return;
    }
    //先序遍历第一个元素就是根节点
    var treeNode = {
        val: pre[0]
    }
    // 循环遍历先序遍历数组,然后在中序遍历中找到它的位置
    for(var i = 0; i < pre.length; i++) {
    		// 如果位置找到了
        if (vin[i] === pre[0]) {
        		// 假设此时 前序遍历数组[1,2,4,7,3,5,6,8] 中序遍历数组[4,7,2,1,5,3,8,6]
        		// left的pre.slice(1, i+1),第一个元素已经被用掉了,所以不从下标0开始
        		// 此时 i = 3,pre.slice(1, i+1)截取下来的数组就是[2,4,7]
        		// 记住slice函数如果有两个参数，则截取起始位置到结束位置（不包括结束位置）
        		// vin.slice(0, i) 截取的数组就是 [4,7,2]
            treeNode.left = reConstructBinaryTree(pre.slice(1, i+1), vin.slice(0, i));
            //console.log("left: " + "pre: " + pre.slice(1, i+1) + "right: " + vin.slice(0, i))
            //pre.slice(i+1)截取下来的数组就是[3,5,6,8]
            //vin.slice(i+1)截取下来的数组就是[5,3,8,6]
            treeNode.right = reConstructBinaryTree(pre.slice(i+1),vin.slice(i+1));
            //console.log("right: " + "pre: " + pre.slice(i+1) + "right: " + vin.slice(i+1))
        }
        //最终递归
    }
    return treeNode;
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};