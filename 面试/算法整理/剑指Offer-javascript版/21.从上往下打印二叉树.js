/*

从上往下打印出二叉树的每个节点，同层节点从左至右打印。

 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function PrintFromTopToBottom(root)
{
  if(!root){return []}
  var result = [root] //用一个辅助数组作为队列来帮助遍历
	var data = [root.val] // 第一个元素为根节点
	
	while(result.length){
		root = result.shift() // 指向下一个元素
		if(root.left){
			data.push(root.left.val)
			result.push(root.left)
		}
		if(root.right){
			data.push(root.right.val)
			result.push(root.right)
		}
	}
	return data


}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};
