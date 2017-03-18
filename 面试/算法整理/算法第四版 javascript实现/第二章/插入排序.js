/*
   插入排序它将数组分成“已排序”和“未排序”两部分，一开始的时候，“已排序”的部分只有一个元素，然后将它后面一个元素从“未排序”部分插入“已排序”部分，从而“已排序”部分增加一个元素，“未排序”部分减少一个元素。以此类推，完成全部排序。

   插入排序有两种处理，普通的是直接交换，优化的是将内循环中较大的元素都向右移动而不是交换。
	 
	 索引左边都是已排序的，但最终位置不确定，当索引到达数组最右端，数组排序完成。
*/

var tools = require('../tools.js')
var newArr = tools.getRandomArr()

// 用less是升序，用more降序
// 直接交换法
function InsertionSort(arr) {
    var len = arr.length
    console.log("原数组:" + "\n")
    tools.show(arr)
    for (var i = 0; i < len; i++) {
        // 将arr[i]插入到a[i-1] a[i-2] a[i-3]..之中
        // 内循环从i位置出发，往左走，将arr[i]插入到合适位置
        for (var j = i; j > 0 && tools.less(arr[j], arr[j - 1]); j--) {
            tools.exch(arr, j, j - 1)
        }
    }
    console.log("排序后:" + "\n")
    tools.show(arr)
}

// 元素右移法
function insertion(arr) {
    var len = arr.length
    console.log("原数组:" + "\n")
    tools.show(arr)
    for (var i = 0; i < len; i++) {
    	  // 内循环先指定插入项
        var insertion = arr[i];
        var j = i;
        // 依旧从i位置出发,往左走,大于插入项的都右,此时插入项已经被覆盖
        while (j > 0 && tools.less(insertion,arr[j - 1])) {
            arr[j] = arr[j - 1];
            j--;
        }
        // 找到合适位置重置该内容为插入项。
        arr[j] = insertion;
    }
    console.log("排序后:" + "\n")
    tools.show(arr)
}

InsertionSort(newArr)
insertion(newArr)
