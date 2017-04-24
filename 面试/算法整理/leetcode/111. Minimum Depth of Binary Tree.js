/*

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.



 */

// 这里用到了之前写过一题的代码，就是把每个depth的节点都存到result
// 然后去用Min来判断长度，替换最小depth
// 
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
var minDepth = function(root) {
    var result = []
    var min = Number.MAX_VALUE
    if (root != null) {
        search(root, "", result)
    }else{
        return 0
    }
    for(var i = 0;i<result.length;i++){
        min = Math.min(min,result[i].split(',').length)
    }
    return min
};

function search(root, path, result) {

    if (root.left == null && root.right == null) {
        result.push(path + root.val)
    }
    if (root.left != null) {
        search(root.left, path + root.val + ",", result)

    }
    if (root.right != null) {
        search(root.right, path + root.val  + ",", result)

    }
}