/*

我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

只是一个变种斐波那契数列，计算的时候多算一个就行了。
 */


function rectCover(number)
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
    rectCover : rectCover
};