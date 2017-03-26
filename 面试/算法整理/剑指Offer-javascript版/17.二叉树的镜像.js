/*

操作给定的二叉树，将其变换为源二叉树的镜像。 

二叉树的镜像定义：源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5

 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function changeIndex(node) {
    if (node) {
        var temp = node.left
        node.left = node.right
        node.right = temp
        changeIndex(node.right)
        changeIndex(node.left)
    } else {
        return
    }
}

function Mirror(root) {
    changeIndex(root)
    return root
    
}
module.exports = {
    Mirror: Mirror
};
