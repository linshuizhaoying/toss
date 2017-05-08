/*

Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.

Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

Could you do this in O(n) runtime?

Example:

Input: [3, 10, 5, 25, 2, 8]

Output: 28

Explanation: The maximum result is 5 ^ 25 = 28.

Build the answer bit by bit from left to right. Let's say we already know the largest first seven bits we can create. How to find the largest first eight bits we can create? Well it's that maximal seven-bits prefix followed by 0 or 1. Append 0 and then try to create the 1 one (i.e., answer ^ 1) from two eight-bits prefixes from nums. If we can, then change that 0 to 1.


 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let max = 0;
    for (let i = 31; i >= 0; i--) {
        max = max << 1;
        let prefixSet = new Set(nums.map(n => n >>> i));
        for (let p of prefixSet) {
            // Are there two prefixes that XOR to max with another 1?
            let complement = (max | 1) ^ p;
            if (prefixSet.has(complement)) {
                max = max | 1;
                break;
            }
        }
    }
    return max;
};
