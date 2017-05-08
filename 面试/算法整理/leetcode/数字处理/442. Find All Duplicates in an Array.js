/*

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var res = [];
    for (var i = 0; i < nums.length; ++i) {
        var index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0)
            res.push(Math.abs(index + 1));
        nums[index] = -nums[index];
    }
    return res;
};
