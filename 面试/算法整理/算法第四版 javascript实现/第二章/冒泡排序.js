/*

冒泡排序就是从最开始的位置或结尾的位置反方向对比，如果比它大/小,就交换然后继续走，第一遍走完,最后一个位置是最大值或者最小值

根据上面我的描述很容易明白冒泡排序的时间复杂度是O(n^2),因为它是双重循环 而且它是稳定的。稳定的含义是：稳定排序算法会让原本有相等键值的纪录维持相对次序.



 */

function exch(a, b, arr) {
    var temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp

}

function less(a, b) {
    return a < b
}

function more(a, b) {
    return a > b
}

function bubbleSort(arr) {
    var len = arr.length
    for (var i = 0; i < len ; i++) {
        for (var j = 0; j < len - i ; j++) {
            if (more(arr[j],arr[j+1])) {
                exch(j, j + 1, arr)
            }
        }
    }
    return arr

}
var nums = [2, 3, 4, 3, 1, 5, 7, 122, 341, -1]
console.log(bubbleSort(nums))
