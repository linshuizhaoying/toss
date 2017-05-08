/*

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11

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
 * @param {number} sum
 * @return {number}
 */
// 感觉考的是深度搜索的知识
// 
// 
// 
// 容易懂
var count;
var pathSum = function(root, sum) {
    count = 0;
    getSum(root, sum)
    return count;



}
function getSum(root, sum) {
    if (root == null)
        return 0;
    rootSum(root, sum, 0);
    getSum(root.left, sum);
    getSum(root.right, sum);
}

function rootSum(root, sum, value) {
    if (root == null)
        return;
    if (root.val + value == sum) {
        count++;
    }
    rootSum(root.left, sum, root.val + value);
    rootSum(root.right, sum, root.val + value);
}

// 版本1
var pathSum = function(root, sum) {
    if (root == null)
        return 0;
    return findPath(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
}

function findPath(root, sum) {
    var res = 0;
    if (root == null)
        return res;
    if (sum == root.val)
        res++;
    res += findPath(root.left, sum - root.val);
    res += findPath(root.right, sum - root.val);
    return res;
}

// 写法2

let pathSum = function(root, sum) {
    if (!root) return 0;
    return sumHelper(root, 0, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

let sumHelper = (root, pre, sum) => {
    if (!root) return 0;
    let total = pre + root.val;
    return (total === sum) + sumHelper(root.left, total, sum) + sumHelper(root.right, total, sum);
};
