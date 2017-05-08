/*

Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

 */

/*

杨辉三角形，又称贾宪三角形、帕斯卡三角形、海亚姆三角形，是二项式系数在的一种写法，形似三角形
杨辉三角以正整数构成，数字左右对称，每行由1开始逐渐变大，然后变小，回到1。
第 n行的数字个数为 n个。
第 n行的第 {\displaystyle k} k个数字为组合数 {\displaystyle C_{n-1}^{k-1}} C_{{n-1}}^{{k-1}}。
第 n行数字和为 {\displaystyle 2^{n-1}} 2^{n-1}。
除每行最左侧与最右侧的数字以外，每个数字等于它的左上方与右上方两个数字之和（也就是说，第 n行第 {\displaystyle k} k个数字等于第 {\displaystyle n-1} n-1行的第 {\displaystyle k-1} k-1个数字与第 {\displaystyle k} k个数字的和）。这是因为有组合恒等式： {\displaystyle C_{n}^{i}=C_{n-1}^{i-1}+C_{n-1}^{i}} C_{{n}}^{{i}}=C_{{n-1}}^{{i-1}}+C_{{n-1}}^{{i}}。可用此性质写出整个杨辉三角形。
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
       if (numRows) {
        var result = [[1]];

        for(var i = 1;i < numRows;i++) {
            result[i] = [];
            for(var j = 0; j < i + 1;j++) {
                result[i][j] = (result[i - 1][j] || 0) + (result[i - 1][j - 1] || 0);
            }
        }
            
        return result;
    }else {
        return [];
    } 
};