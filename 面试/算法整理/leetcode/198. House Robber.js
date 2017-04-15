/*

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 题意，假设你是个强盗，你要抢劫一条街
// 每个房子都有一定数量的钱，唯一的限制是阻止你们抢劫每个房屋，
// 相邻的房屋有安全系统连接，如果两个相邻的房屋在同一天晚上被打破，它会自动联系警察。
// 给一串数字代表每个房间里的钱
// 在不引起警报情况下，能抢的最多的钱

// 一个动态规划的问题
// 这里有个C++转来的解法
// 类似DP，思想是差不多，获取偶数和和奇数和。然后取最大值

var rob = function(nums) {
    var n = nums.length
    var a = 0;
    var b = 0;
    
    for (var i=0; i<n; i++)
    {
        if (i%2==0)
        {
            a = Math.max(a+nums[i], b);
        }
        else
        {
            b = Math.max(a, b+nums[i]);
        }
    }
    
    return Math.max(a, b);
};
// 这是比较标准的DP解法
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0)
        return 0;
    if(nums.length === 1)
        return nums[0];
    // 最初状态就是前两个房子里金额的最大值者
    nums[1] = Math.max(nums[0], nums[1]);
    // 从第三个开始
    for(var i = 2; i < nums.length; i++){
    	  // 每一个num[i] 存储当前类似 a,b,c 中 a,c和与b的大小比较，存储最大值。这样能保证每一次抢的都不相连。
        nums[i] = Math.max(nums[i-2] + nums[i], nums[i - 1]);
    }
    
    return nums[nums.length - 1];
};