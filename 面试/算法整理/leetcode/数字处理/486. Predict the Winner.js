/*
Given an array of scores that are non-negative integers. Player 1 picks one of the numbers from either end of the array followed by the player 2 and then player 1 and so on. Each time a player picks a number, that number will not be available for the next player. This continues until all the scores have been chosen. The player with the maximum score wins.

Given an array of scores, predict whether player 1 is the winner. You can assume each player plays to maximize his score.

Example 1:
Input: [1, 5, 2]
Output: False
Explanation: Initially, player 1 can choose between 1 and 2. 
If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2). 
So, final score of player 1 is 1 + 2 = 3, and player 2 is 5. 
Hence, player 1 will never be the winner and you need to return False.
Example 2:
Input: [1, 5, 233, 7]
Output: True
Explanation: Player 1 first chooses 1. Then player 2 have to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.
Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.
Note:
1 <= length of the array <= 20.
Any scores in the given array are non-negative integers and will not exceed 10,000,000.
If the scores of both players are equal, then player 1 is still the winner.

给定一个非负整数数组表示一组分数。玩家1从数组两端任取一个数字，之后由玩家2选取，以此类推。每当一名玩家选择一个数字之后，另一位玩家就不能再选这个数字。重复此过程直到所有的数字都被选完。分数高的玩家获胜。

给定分数数组，预测玩家1是否可以获胜。可以假设每一个玩家都采用最优策略游戏。

注意：

数组长度∈[1, 20]
任意分数均为非负整数，且不超过10,000,000
如果分数相同，则判定为玩家1获胜


 */

// dp

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
   if (nums == null) { return true; }
    var n = nums.length;
    if ((n & 1) == 0) { return true; } // Improved with hot13399's comment.
    var dp = [];
    for (var i = n - 1; i >= 0; i--) {
        for (var j = i; j < n; j++) {
            if (i == j) {
                dp[i] = nums[i];
            } else {
                dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1]);
            }
        }
    }
    return dp[n - 1] >= 0;
};