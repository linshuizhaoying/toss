/*

Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.


Example 1:

Input: k = 3, n = 7

Output:

[[1,2,4]]

Example 2:

Input: k = 3, n = 9

Output:

[[1,2,6], [1,3,5], [2,3,4]]

 */
// 找到所有组合，指定k个数字相加等于n
// 

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var result = [];
    search(1, [], k, n);
    return result;

    function search(from, prefix, k, n) {
        if (k === 0 && n === 0) return result.push(prefix);
        if (from > 9) return;
        prefix.push(from);
        search(from + 1, prefix.slice(0), k - 1, n - from);
        prefix.pop();
        search(from + 1, prefix.slice(0), k, n);
    }
};
