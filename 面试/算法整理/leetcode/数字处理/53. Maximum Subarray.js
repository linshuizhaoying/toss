/*

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 我的思路是保存每一步计算状态，如果有一个值大于前面所用值的和，那么抛弃前面的相加值，从这个值开始重新累计。
// 利用一个数组来保存每次计算的值，最后排序
var maxSubArray = function(nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    var result = []
    var sum = nums[0]
    for (var i = 1; i < nums.length; i++) {
        result.push(sum)
        sum += nums[i]
        result.push(sum)
        if (nums[i] > sum) {
            sum = nums[i]
            result.push(sum)
        } 
   
    }
    var t = result.sort(function f(a, b) {
        return a - b })
    console.log(t)
    return t[t.length - 1]
};

// 动态规划解法0-0，其实一开始也考虑类似解法。。。然而不熟悉,写完自己的看看别人的思路
// 
// the sub problem should look like: 
// maxSubArray(int A[], int i, int j)
// 
// maxSubArray(A, i) = maxSubArray(A, i - 1) > 0 ? maxSubArray(A, i - 1) : 0 + A[i]; 
// 

var maxSubArray = function(nums) {
       var n = nums.length;
       var dp = [];//dp[i] means the maximum subarray ending with A[i];
        dp[0] = nums[0];
        var max = nums[0];
        
        for(var i = 1; i < n; i++){
            dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
            console.log(dp[i])
            max = Math.max(max, dp[i]);
        }
        
        return max;
};


// 这个思路我之前也考虑了一下，但是没有想得完整，因此觉得不可行，但是其实是可以的

var maxSubArray = function(nums) {
  var max = nums[0],
    sum = 0;
  nums.forEach((e, i) => {
    sum += e;
    if (sum > max) 
      max = sum;
    if (sum < 0) 
      sum = 0;
  });
  return max;
};


