/*

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

 */

/**
 * @param {number} n
 * @return {number}
 */
// 这题和青蛙跳一样
var climbStairs = function(number) {
    if (number <= 1) {
        return number
    }
    var arr = [1, 1]
    for (var i = 1; i < number; i++) {
        arr.push(arr[i] + arr[i - 1])
    }
    return arr[number]
};