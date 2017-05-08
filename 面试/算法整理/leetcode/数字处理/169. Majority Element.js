/*

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var obj = {};

    for (var i = 0; i < nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if (obj[nums[i]] > nums.length / 2) return nums[i];
    }
};

// 更快的方法

var majorityElement = function(nums) {
    var major = nums[0],
        count = 1;
    for (var i = 1; i < nums.length; i++) {
        if (major == nums[i]) {
            count++;
        } else { count-- }
        if (count == 0) {
            major = nums[i];
            count++;

        }
    }
    return major;
};

