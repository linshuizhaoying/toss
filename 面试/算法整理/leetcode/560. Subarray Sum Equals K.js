/*

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 是从头开始加，从尾开始减
var subarraySum = function(nums, k) {
     if (nums.length == 0) return 0;

        var n = nums.length;
        var sums = [];

        var result = 0;

        for(var i = 0; i < n; i++)
        {
            if (i == 0) sums[i] = nums[i];
            else  sums[i] = sums[i-1] + nums[i];

            if (sums[i] == k) result++;
        }

        for (var i = 0; i < n; i++)
        {
            for (var j = 0; j < i; j++)
            {
                if (sums[i] - sums[j] == k) result++;
            }
        }

        return result;

};