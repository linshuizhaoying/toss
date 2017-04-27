/*
Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:

    2
   / \
  1   3

Output:
1
Example 2: 
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7

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
var findBottomLeftValue = function(root) {
    var findBottomLeftValue = function(root) {
      var result = [];
    var index = 0;
    var recursive = function(node, index){

        if(!node) return; 
        if(index >= result.length) result[index] = [];
        // 类似做了一个map映射，同等级的都自动Push进去
        result[index].push(node.val);
        recursive(node.left, index + 1);
        recursive(node.right, index + 1);
    }
    // 从根节点开始
    recursive(root, 0);
    return result.reverse()[0][0]
};