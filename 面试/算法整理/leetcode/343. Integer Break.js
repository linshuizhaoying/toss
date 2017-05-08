/*

Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).

Note: You may assume that n is not less than 2 and not larger than 58.



 */
// DP
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    var arr = [0, 1];
    for (var i = 2; i <= n; i++) {
        arr[i] = 0;
        // exclusive
        for (var j = 1; j < i; j++) {
            arr[i] = Math.max(arr[i], arr[j] * (i - j), j * (i - j));
        }
    }
    return arr[n];
};
