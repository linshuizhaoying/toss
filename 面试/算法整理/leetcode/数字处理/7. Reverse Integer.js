/*

Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321



 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sign = (x > 0) ? 1 : -1;
    x = Math.abs(x);
    var str = x.toString().split("").reverse().join("");
    var result = sign * Number(str);
    if (result > 2147483647 || result < -2147483648) return 0;
    else return result;
};
