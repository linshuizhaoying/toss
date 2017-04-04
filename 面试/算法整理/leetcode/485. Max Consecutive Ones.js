/*

Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000

 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var i = 0
    var result = []
    var last = 0
    while(i<=nums.length){
        if(nums[i] === 0){
            if(result.length>last){
                last = result.length
                result = []
            }else{
                result = []
            }
            
        }else if(nums[i] ===1){
            result.push(1)
        }
        i++
    }
    return last > result.length?last:result.length
};