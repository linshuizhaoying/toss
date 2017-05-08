/*

Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
For example:
Given BST [1,null,2,2],
   1
    \
     2
    /
   2
return [2].

Note: If a tree has more than one mode, you can return them in any order.

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
 * @return {number[]}
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
 * @return {number[]}
 */
var findMode = function(root) {
 if (!root) return [];    
    var result = {};
    var resultArray = [];
    var node = root;
    var max = 0;
    
    var recursiveTraverse = function(node) {
    
        if (node.left) {
            recursiveTraverse(node.left);
        }
        
        if (!result[node.val]) {
            result[node.val] = 1;
        } else {
            result[node.val] = result[node.val] + 1;
        }
        
        if (node.right) {
            recursiveTraverse(node.right);
        }
    }
    
    recursiveTraverse(node);
    console.log(result)
    Object.keys(result).map(function(x) {  
        if (result[x] > max) {
            max = result[x]
        }
    });

    for (key in result) {
        if (parseInt(result[key]) >= parseInt(max)) {
            resultArray.push(parseInt(key));
        }
    }
    
    return resultArray;
};