/*

把只包含因子2、3和5的数称作丑数（Ugly Number）
。例如6、8都是丑数，但14不是，因为它包含因子7。 
习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

 */
function GetUglyNumber_Solution(index) {
    if (index == 0) {
        return 0
    }
    //1是第一个丑数
    var arr = [1]
    var t2 = 0,
        t3 = 0,
        t5 = 0
    for (var i = 1; i < index; i++) {
        arr[i] = Math.min(arr[t2] * 2, arr[t3] * 3, arr[t5] * 5)
        if (arr[i] == arr[t2] * 2) { t2++ }
        if (arr[i] == arr[t3] * 3) { t3++ }
        if (arr[i] == arr[t5] * 5) { t5++ }
    }
    return arr[index - 1]
}
module.exports = {
    GetUglyNumber_Solution: GetUglyNumber_Solution
};
