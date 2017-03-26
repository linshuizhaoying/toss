/*
如何得到一个数据流中的中位数？
如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。
如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

 */

var arr = [];

function Insert(num) {
    // write code here
    arr.push(num);
    arr.sort(function(a, b) {
        return a - b;
    });
}

function GetMedian() {
    // write code here
    var len = arr.length;
    if (len == 0) {
        return 0;
    }
    if (len % 2 == 1) {
        return arr[(len - 1) / 2];
    }

    return (arr[len / 2] + arr[len / 2 - 1]) / 2;
}

module.exports = {
    Insert: Insert,
    GetMedian: GetMedian
};
