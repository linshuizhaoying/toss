/*

Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.

Example 1:
Input: [3, 1, 4, 1, 5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
Example 2:
Input:[1, 2, 3, 4, 5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
Example 3:
Input: [1, 3, 1, 5, 4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
Note:
The pairs (i, j) and (j, i) count as the same pair.
The length of the array won't exceed 10,000.
All the integers in the given input belong to the range: [-1e7, 1e7].

 */

/*
给了我们一个含有重复数字的无序数组，还有一个整数k，
让我们找出有多少对不重复的数对(i, j)使得i和j的差刚好为k。

成对的值不分先后，所以先对nums进行排序。
用一个set存储出现过的值，用于后续判断是否某个值已经有值与其成对。
分为两种情况：
（1）k==0，即找出值相等的对数。
再用一个sameSet存储所有已成对的值，避免同一个值加入结果多次。只有sameSet中不含该值，且set中包含了该值，才能加入结果。
（2）k!=0，即找出差的绝对值为k的对数。
只有set中不包含该值但包含了该值-k，才能加入结果。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0) return 0;
    const seen = {};
    const pairs = {};
    return nums.reduce((count, a) => {
        count += isNewPair(seen, pairs, a, a - k) + isNewPair(seen, pairs, a, a + k);
        seen[a] = 1;
        return count;
    }, 0);
};

function isNewPair(seen, pairs, a, b) {
    if (!seen[b]) return false;
    let key = a < b ? a + ',' + b : b + ',' + a;
    if (!pairs[key]) {
        pairs[key] = 1;
        return true;
    }
    return false;
}






