/*

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

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
 * @return {boolean}
 */

var isBalanced = function(root) {
    return helper(root) !== -1;
};

var helper =  function(root) {
    if (!root) { return 0; }
    
    var left = helper(root.left);
    var right = helper(root.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) { return -1; }
    return 1 + Math.max(left, right);
};



// 老方法
var isBalanced = function(root) {
    if (root == null) {
        return true
    }

    var left = TreeDepth(root.left)
    var right = TreeDepth(root.right)
    var diff = right - left
    if (diff >1 || diff < -1) {
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right)

};

function TreeDepth(root) {
    if (root == null) {
        return true
    }
    var nleft = TreeDepth(root.left);
    var nright = TreeDepth(root.right);
    return (nleft > nright) ? (nleft + 1) : (nright + 1);
}