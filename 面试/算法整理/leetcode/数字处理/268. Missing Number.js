/*

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
 */

//提议要求，给一个连续的数组，要求只用一个额外空间，要求线性复杂度，找到缺少的数字
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var missing = -1
    var temp = nums.sort(function compare(a,b){return a-b})
    for (var i = 0; i <= temp.length; i++) {
    	 if(nums[i] != i){
    	 	 missing = i
    	 	 return missing
    	 }
    }
    return missing
};


// 方法2 XOR 和之前的想法类似，都是和ib比较，不过这个效率是上面的4倍
// 
var missingNumber = function(nums) {
  var res = nums.length;
    for(var i=0; i<nums.length; i++){
        res ^= i;
        res ^= nums[i];
    }
    return res;
};
// 方法3 利用数学公式 求和 然后递减 
var missingNumber = function(nums) {
    //var temp = nums.sort(function compare(a,b){return a-b})
     var len = nums.length;
    var sum = (0+len)*(len+1)/2;
    for(var i=0; i<len; i++)
        sum-=nums[i];
    return sum;
};

