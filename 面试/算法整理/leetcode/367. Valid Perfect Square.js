/*

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True
Example 2:

Input: 14
Returns: False

 */

/**
 * @param {number} num
 * @return {boolean}
 */
// 手动判断是否开平方后是整数
// 这个自己写的 效率蛮低0-0
var isPerfectSquare = function(num) {
    var i = 1
    var flag = true
    while (flag) {
        if (i * i > num) {
            return false
        }
        if (i * i == num) {
            return true
        }
        i += 1
    }
};
/*
This is a math problem：
1 = 1
4 = 1 + 3
9 = 1 + 3 + 5
16 = 1 + 3 + 5 + 7
25 = 1 + 3 + 5 + 7 + 9
36 = 1 + 3 + 5 + 7 + 9 + 11
....
so 1+3+...+(2n-1) = (2n-1 + 1)n/2 = nn

 */

int i = 1;
while (num > 0) {
    num -= i;
    i += 2;
}
return num == 0;
