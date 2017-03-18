// 题意 给一个数字组成的数组，给一个指定目标值,找到两个值加起来能符合目标值的,返回数组下班
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// 

// 双重循环,需要跳过同一个下标相加为目标值的情况
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    var temp = []
    		flag: //为了跳出多重循环
        for (var i = 0; i < nums.length; i++) {
            for (var j = 0; j < nums.length; j++) {
                if ((nums[i] + nums[j] === target) && i !=j ) {
                    temp.push(i)
                    temp.push(j)
                    break flag
                }
            }
        }
    return temp
};
