/*

Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).

 */

// 找到任意两个节点之间最小绝对值
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

// 错误方式
var temp = []
var getMinimumDifference = function(root) {
   // 思路就是遍历二叉树，计算所有根节点与左右节点的绝对值，然后存数组，排个序，返回第一个    
    temp = []
    collect(root)
    console.log(temp)
    temp.sort(function compareNumbers(a, b) {
      return a - b;
    })
    return temp[0]
};
function collect(root){
	if(root == null){return}
	if(root.left && root.val!=null && root.left.val!=null){
		temp.push(Math.abs(root.val - root.left.val))
	}
	if(root.right&& root.val!=null && root.right.val!=null){
		temp.push(Math.abs(root.val - root.right.val))
	}
	collect(root.left)
	collect(root.right)
}




// 改造

var temp = []
var getMinimumDifference = function(root) {
    temp = []
    var min = 999999
    collect(root)
    temp.sort(function compareNumbers(a, b) {
      return a - b;
    })
    for(var i = 1;i<temp.length;i++){
    	min = Math.min(Math.abs(temp[i] - temp[i-1]),min)
    }
    return min
};
function collect(root){
	if(root == null){return}
	temp.push(root.val)
	collect(root.left)
	collect(root.right)
}












