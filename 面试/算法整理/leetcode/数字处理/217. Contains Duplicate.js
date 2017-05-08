/*

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Subscribe to see which companies asked this question.

 */



/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 题意就是 给一堆数字数组，只要有重复返回true，都不重复返回false
var containsDuplicate = function(nums) {
    var map = {}
    for(var i = 0;i<nums.length;i++){
    	if(!map[nums[i]]){
    		map[nums[i]] = 1
    	}else{
    		return true
    	}
    }
    return false
};