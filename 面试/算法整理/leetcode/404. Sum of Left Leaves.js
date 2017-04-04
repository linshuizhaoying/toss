/*

Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

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
var sumOfLeftLeaves = function(root) {
    var leftArr = []
    function getLeft(root,isLeft) {
        if (root === null) {
            return
        }
        if(isLeft && !root.left && !root.right){
        	leftArr.push(root.val)
        }
        if(root.left){
             getLeft(root.left,true)
        }
        if(root.right){
            getLeft(root.right,false)
        }
        
    }
    getLeft(root)
    if(leftArr.length == 0){
        return 0
    }
    return leftArr.reduce(function add(a,b){return a+b})
};


var sum = 0;
    function rec(node, isLeft) {
        if (node) {
            // Is a left leaf
            if (isLeft && !node.left && !node.right) 
                sum += node.val;
            // Keep traveling down
            if (node.right)
                rec(node.right, false);
            if (node.left)
                rec(node.left, true);
        }
    }
    rec(root, false);
    
    return sum;
