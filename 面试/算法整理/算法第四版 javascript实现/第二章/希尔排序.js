/*
	对于大规模乱序数组插入排序很慢，因为它之后交换相邻的元素。
	基于插入排序而加快排序速度的希尔排序，可以交换不相邻的元素以对数组局部排序。
	并最终用插入排序将局部有序数组排序为整体有序。
	数组越大，希尔排序的优势越大
  
  希尔排序的思想是使数组中任意间隔为h的元素都是有序的，一个h有序数组就是h个互相独立的有序数组
  编制在一起组成的数组。
  在排序时，h如果很大，我们就能将元素移到很远的地方(这样大规模乱序就很排序的很快)
  然后不断缩小h，最后以1结尾的h能将数组整体排序。

  H一般情况是 N/3 开始递减到1
   
 */

var tools = require('../tools.js')
var newArr = tools.getRandomArr()


function ShellSort(arr) {
    var len = arr.length
    console.log("原数组:" + "\n")
    tools.show(arr)
    var h = 1
    // 如果数组比较大，那么按照N/3的规则将其划分
    while (h < len / 3) { h = 3 * h + 1 }
    // 外循环是不断减小h直到1
    while (h >= 1) {
    	  //内循环是对每个间隔h的数组分别进行插入排序
        for (var i = h; i < len; i++) {
            for (var j = i; j >= h && tools.less(arr[j], arr[j - h]); j = j - h) {
                tools.exch(arr, j, j - h)
            }
        }
        h = Math.floor(h / 3)
    }
    console.log("排序后:" + "\n")
    tools.show(arr)
}
ShellSort(newArr)
