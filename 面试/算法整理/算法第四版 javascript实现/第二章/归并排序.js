/*
归并操作：将两个有序的数组归并成一个更大的有序数组
归并排序: 可以先递归的将一个待排序的数组分成两半分别排序，然后将结果归并。
主要优势是能讲任意长度为N的数组排序所需时间和NlogN成正比
缺点是所需额外空间和N成正比。

原地归并思想：
先将前半部分排序，然后将后半部分排序

 */

//原地归并的抽象方法
var tools = require('../tools.js')
var newArr = tools.getRandomArr()

/*
   merge部分还不是很理解，待补充。
 */
function merge(arr, lo, mid, hi) {
    //将arr[lo...mid] 和 arr[mid+1...hi]归并
    var i = lo,
        j = mid + 1

    // 用temp空数组作为额外空间
    for (var k = lo; k <= hi; k++) {
        temp[k] = arr[k]
    }
    // 归并到arr[lo,hi]
    for (var k = lo; k <= hi; k++) {

        if (i > mid) { // 左半边用尽(取右半边元素)
            arr[k] = temp[j++]
        } else if (j > hi) { // 右半边用尽(取左半边元素)
            arr[k] = temp[i++]
        } else if (tools.less(temp[j], temp[i])) { // 右半边的当前元素小于左半边的当前元素(取右半边的当前元素)
            arr[k] = temp[j++]
        } else { //右半边的当前元素大于左半边的当前元素(取左半边的当前元素)
            arr[k] = temp[i++]
        }

    }

}
var temp = []

function MergeSort(arr) {
    console.log("原数组:" + "\n")
    tools.show(arr)

    sort(arr, 0, arr.length - 1)
    
    console.log("排序后:" + "\n")
    tools.show(arr)

    console.log("该数组是否已经排序完成:" + tools.isSorted(arr,"up"))
}
// 自顶向下的归并排序
function sort(arr, lo, hi) {
    if (hi <= lo) {
        return
    }

    var mid = Math.floor(lo + (hi - lo) / 2)
    sort(arr, lo, mid)
    sort(arr, mid + 1, hi)
    merge(arr, lo, mid, hi)

}


MergeSort(newArr)
