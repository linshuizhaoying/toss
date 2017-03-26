/*

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
要求不能创建任何新的结点，只能调整树中结点指针的指向。

双向链表不是很懂，我就参考别人的了

 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    var tail = null
    if(pRootOfTree == null){
    	return null
    }
    tail = ConvertNode(pRootOfTree,tail)
    var head = tail
    while(head && head.left){
    	head = head.left
    }
    return head

}
function ConvertNode(node,tail){
	if(node.left!=null){
		tail = ConvertNode(node.left,tail)
	}

	node.left = tail
	if(tail){
		tail.right = node
	}

	tail = node

	if(node.right != null){
		tail = ConvertNode(node.right,tail)
	}

	return tail
}
module.exports = {
    Convert : Convert
};








