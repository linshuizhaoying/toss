/*

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.


 */

// 题意要求在原数组上操作，而且最小化操作数
// 
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 保存0的位置
    console.log(nums)
    
    var zeroIndex = []
    var zeroNum = 0
    for(var i = 0;i<nums.length;i++){
    	if(nums[i] === 0){
    		zeroIndex.push(i)
    		zeroNum++
    	}else{
    		if(zeroNum>0){
    			var temp = nums[i]
    			nums[zeroIndex.shift()] =temp
    			nums[i] = 0
    			zeroIndex.push(i)
    		}
    	}
    }
    console.log(nums)

};


// 解法2

 if (nums == null || nums.length == 0) {
        return;
    }
    
    int cur = 0;

    for (int i = 0; i < nums.length; ++i) {
        if (nums[i] != 0) {
            int temp = nums[cur];
            nums[cur++] = nums[i];
            nums[i] = temp;
        }
    }


// 解法3
	int index=0;
    		for (int i=0;i<nums.length;i++){
    			if (nums[i]!=0) nums[index++]=nums[i];
    		}
    		while(index<nums.length){
    			nums[index++]=0;
    		}