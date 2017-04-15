/*

Given an integer, write a function to determine if it is a power of two.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n> 0 && /^10*$/.test(n.toString(2))
};