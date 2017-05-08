/*

Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:

Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

 */
// 没咋理解。。不顾据说是道数学题0-0
// let's define sum as the sum of all the numbers, before any moves; minNum as the min number int the list; n is the length of the list;

// After, say m moves, we get all the numbers as x , and we will get the following equation

//  sum + m * (n - 1) = x * n
// and actually,

//   x = minNum + m
// and finally, we will get

//   sum - minNum * n = m
// So, it is clear and easy now.
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
        var min = nums[0];
    var sum = min;
    var len = nums.length;
    for(let i = 1; i < len; i++){
        sum += nums[i];
        min = nums[i] < min? nums[i]: min;
    }
    return sum - len * min;
};