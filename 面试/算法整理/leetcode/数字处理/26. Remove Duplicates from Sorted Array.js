/*

Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

Subscribe to see which companies asked this question.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var firstP = 0,
        secondP = 0;
    
    while(secondP < nums.length){
        if(nums[secondP] > nums[firstP]){
            firstP++;
            nums[firstP] = nums[secondP];
        }
        secondP++;
    }
    
    return firstP + 1;
    
};