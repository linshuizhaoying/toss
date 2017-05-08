/*

Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

Example 1:
Input: [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number; 
The second 1's next greater number needs to search circularly, which is also 2.

给定一个圆形数组（最后一个元素的下一个元素是数组的第一个元素），
为每个元素打印下一个更大的数字。
下一个大数字x是数组中下一个遍历顺序的第一个更大的数字，
这意味着您可以循环搜索以查找其下一个更大的数字。如果不存在，则输出-1表示该数字。

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    if(nums == null || nums.length == 0) return [];
    var n = nums.length;
    var result = [];
    for(var i = 0; i < n; ++i){
        var j = (i + 1) % n;
        for(; j != n && j != i; ){
            if(nums[j] > nums[i]) break;
            j = (j + 1) % n;
        }
        if(j == i) result[i] = -1;
        else result[i] = nums[j];
    }
    return result;
};