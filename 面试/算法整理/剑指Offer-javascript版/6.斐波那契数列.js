/*
大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。
n<=39

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

 */


function Fibonacci(n) {
    if (n <= 1) {
        return n
    }
    var arr = [1, 1]
    for (var i = 1; i < n - 1; i++) {
        arr.push(arr[i] + arr[i - 1])
    }
    return arr[n-1]
}
module.exports = {
    Fibonacci: Fibonacci
};
