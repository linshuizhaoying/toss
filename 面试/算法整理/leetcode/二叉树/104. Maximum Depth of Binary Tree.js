/*

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 二叉树求深度,最常见的递归法 beat 82%
var maxDepth = function(root) {
    if(root === null){
    	return 0
    }
    var left = maxDepth(root.left)
    var right = maxDepth(root.right)

    return (left>right) ? left+1:right+1
};












