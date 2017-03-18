var tools = require('../tools.js')
var newArr = tools.getRandomArr()

console.log("选择排序")

/*
找到数组中最小的那个元素，将它和数组的第一个元素交换位置，
如果第一个元素就是最小的那么就和自己交换
然后，在剩下的数组中找到最小的元素，将它和数组的第二个元素交换
循环直到排序完成。

内循环只比较大小，交换代码在内循环之外
每次交换都排定一个元素，交换的总次数为N

 */

function SelectionSort(arr) {
    var n = arr.length
    console.log("原数组:" + "\n")
    tools.show(arr)
    for (var i = 0; i < n; i++) {
        var min = i // 最小元素的索引
        for (var j = i + 1; j < n; j++) {
            if (tools.less(arr[j], arr[min])) {
                min = j
            }
        }
        tools.exch(arr, i, min)
    }
    console.log("排序后:" + "\n")
    tools.show(arr)
}
SelectionSort(newArr)
