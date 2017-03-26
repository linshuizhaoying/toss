/*
一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
只是一个变种斐波那契数列，计算的时候多算一个就行了。
 */

function jumpFloor(number)
{
    if (number <= 1) {
        return number
    }
    var arr = [1, 1]
    for (var i = 1; i < number; i++) {
        arr.push(arr[i] + arr[i - 1])
    }
    return arr[number]

}
module.exports = {
    jumpFloor : jumpFloor
};