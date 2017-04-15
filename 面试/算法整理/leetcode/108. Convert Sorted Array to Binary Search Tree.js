/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

 */

// 给你一个上升的数组，让你建立一个平衡二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// 二分查找法建立

var sortedArrayToBST = function(nums) {
    if (!nums) {
        return null;
    }
    return helper(nums, 0, nums.length - 1);
}

var helper = function(nums, low, high) {
    if (low > high) { // Done
        return null;
    }
    var mid = (low + (high - low) / 2)>>0;
    var node = new TreeNode(nums[mid]);
    node.left = helper(nums, low, mid - 1);
    node.right = helper(nums, mid + 1, high);
    return node;
}