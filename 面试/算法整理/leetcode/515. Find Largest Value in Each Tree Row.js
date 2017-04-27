/*

You need to find the largest value in each row of a binary tree.

Example:
Input: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

Output: [1, 3, 9]

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
var largestValues = function(root) {
 
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
var largestValues = function(root) {
 
        var result = [];
        var index = 0;
        var recursive = function(node, index) {

                if (!node) return;
                if (index >= result.length) result[index] = [];
                // 类似做了一个map映射，同等级的都自动Push进去
                result[index].push(node.val);
                recursive(node.left, index + 1);
                recursive(node.right, index + 1);
            }
            // 从根节点开始
        recursive(root, 0);
        var arr = []
        for(var i = 0;i<result.length;i++){
            console.log(result[i])
        	 arr.push(result[i].sort(function com(a,b){return b-a})[0])
        }
        return arr
    
};


var helper = function(root, level, items) {
    if(!root) return;
    if(items[level]==undefined) items[level] = root.val
    items[level] = Math.max(items[level], root.val)
    helper(root.left, level+1, items)
    helper(root.right, level+1, items)
}
var largestValues = function(root) {
    var items = [];
    helper(root, 0, items)
    return items
};

