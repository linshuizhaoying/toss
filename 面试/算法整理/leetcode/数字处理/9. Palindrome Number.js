/*

Determine whether an integer is a palindrome. Do this without extra space.

 */


/**
 * @param {number} x
 * @return {boolean}
 */
// javascript 运算精度问题 不适合直接/ %到小数位 所以最后还是字符串解决。
var isPalindrome = function(x) {
    return x === +x.toString().split('').reverse().join('');
};