/*

Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function(p, q) {
    // 思路 中序遍历一下，存一下数组，判断是否相等
    /*
    [10,5,15]
    [10,5,null,null,15]
		但是遇到这种就懵逼了
     */
    // 
    var arrp = []
    traverse(p, arrp)
    var arrq = []
    traverse(q, arrq)
    console.log(p.toString())

    function traverse(node, arr) {
        if (node.val == null) {
            return -1 }
        arr.push(node.val)
        if (node.left) {
            traverse(node.left, arr)
        }
        if (node.right) {
            traverse(node.right, arr)
        }
    }
    console.log(arrp)
    console.log(arrq)
    return arrp.join('').toString() == arrq.join('').toString()
};

var isSameTree = function(p, q) {
    if (p == null || q == null) {
        return p == q;
    }
    if (p.val != q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
