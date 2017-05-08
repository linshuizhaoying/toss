/*


Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.


 */


/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var sum = 0, map = [0];
    for(var i = 1; i <= nums.length; i++){
        sum += nums[i - 1];
        map[i] = sum;
    }
    this.map = map;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
        var map = this.map;
    return map[j + 1] - map[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */