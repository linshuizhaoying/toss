/*

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?



 */

/**
 * @param {number} num
 * @return {boolean}
 */
// 用之前power 3的方法，改一下。还是二进制大法靠谱0-0
var isPowerOfFour = function(num) {
     return /^10*$/.test(num.toString(4));
};