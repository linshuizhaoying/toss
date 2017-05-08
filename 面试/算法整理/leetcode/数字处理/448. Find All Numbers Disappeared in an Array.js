/*

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var ret = []
    console.log(nums)
    for (var i = 0; i < nums.length; i++) {
        var val = Math.abs(nums[i]) - 1;
        if (nums[val] > 0) {
            nums[val] = -nums[val];
        }
    }
    console.log(nums)
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] > 0) {
            ret.push(j + 1);
        }
    }
    return ret;
};
/*

Your input

[4,3,2,7,8,2,3,1]
Your stdout

[ 4, 3, 2, 7, 8, 2, 3, 1 ]
[ -4, -3, -2, -7, 8, 2, -3, -1 ]

 */
