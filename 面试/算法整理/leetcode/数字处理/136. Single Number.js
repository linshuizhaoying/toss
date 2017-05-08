/*

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Subscribe to see which companies asked this question.

Show Tags
Show Similar Problems

题意就是从一堆情侣中找到单身狗

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var sortArr = nums.sort()
    while(sortArr.length){
        if(sortArr[sortArr.length -1] === sortArr[sortArr.length -2]){
            sortArr.pop()
            sortArr.pop()
        }else{
            if(sortArr[sortArr.length -1] === sortArr[sortArr.length -3]){
                return sortArr[sortArr.length-2]
            }else{
                return sortArr[sortArr.length-1]
            }
            break;
        }
        
    }
};

// 优秀解法
// known that A XOR A = 0 and the XOR operator is commutative, the solution will be very straightforward.
// 
var singleNumber = function(nums) {
  var result = 0;
    for (var i = 0; i<nums.length; i++)
    {
		  result ^=nums[i];
    }
	return result;
};