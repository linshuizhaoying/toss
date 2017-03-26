/*

输入一个递增排序的数组和一个数字S，在数组中查找两个数，是的他们的和正好是S，
如果有多对数字的和等于S，输出两个数的乘积最小的。 
输出描述:
对应每个测试案例，输出两个数，小的先输出。

 */

function FindNumbersWithSum(array, sum)
{
  var low = 0, height = array.length - 1
    var currentSum = 0, result = []
    while (low < height) {
        currentSum = array[low] + array[height]
        if (sum === currentSum) {
            result.push([array[low], array[height]])
            low++
        } else if (currentSum < sum) {
            low++
        } else {
            height--
        }
    }
    if (result.length === 0) {
        return []
    } else {
        return result[0]
    }
	
}
module.exports = {
    FindNumbersWithSum : FindNumbersWithSum
};