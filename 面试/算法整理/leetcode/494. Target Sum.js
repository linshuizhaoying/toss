/*

You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:
Input: nums is [1, 1, 1, 1, 1], S is 3. 
Output: 5
Explanation: 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.


 */

// dp dfs

var findTargetSumWays = function(nums, S, sum = 0, i = 0, memo = new Map()) {
    let key = sum + ',' + i;
    if (memo.has(key)) return memo.get(key);
    if (i === nums.length) return +(sum === S);
    memo.set(key, findTargetSumWays(nums, S, sum + nums[i], i + 1, memo) + findTargetSumWays(nums, S, sum - nums[i], i + 1, memo));
    return memo.get(key);
};



var findTargetSumWays = function(nums, S) {
    if (!nums || nums.length === 0) { return count; }
    
    return helper(0, 0, {}, nums, S);
};

var helper = function(pos, sum, hash, nums, S) {
    let key = `${pos}->${sum}`;
    if (hash.hasOwnProperty(key)) { return hash[key]; }
    if (pos === nums.length) { return sum === S ? 1 : 0; }
    
    let add = helper(pos + 1, sum + nums[pos], hash, nums, S);
    let minus = helper(pos + 1, sum - nums[pos], hash, nums, S);
    hash[key] = add + minus;
    
    return add + minus;
};