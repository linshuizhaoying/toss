/*
快速排序,讲一个数组分为两个子数组,将两部分独立排序,当两个子数组都有序了，整个数组就有序了。

在归并排序中，递归调用在处理整个数组之前

在快速排序中，递归调用在处理整个数组之后

在归并排序中，一个数组被等分为两半

在快速排序中，切分的位置决定于数组的内容。

快排就是一开始找个中介，然后把比它小的放左边，比它大的放右边，然后重新对中介两边的数据各自重新找个中介,如此循环

*/


var tools = require('../tools.js')
var newArr = tools.getRandomArr() 


function QuickSort(arr){
　if (arr.length <= 1) { return arr }
	 
　　var midIndex = Math.floor(arr.length / 2)
　　var mid = arr.splice(midIndex, 1)[0]
　　var left = []
　　var right = []
   //console.log("将中介提取出来后数组是:" + arr)
　　for (var i = 0 ; i < arr.length ; i++){
			 //console.log("此刻中介是:" + mid + "当前元素是:" + arr[i])
　　　　if (arr[i] < mid) {
　　　　　　left.push(arr[i])
					//console.log("移动" + arr[i] + "到左边")
　　　　} else {
　　　　　　right.push(arr[i])
					//console.log("移动" + arr[i] + "到右边")
　　　　}

　　}
		//concat() 先创建当前数组的一个副本，然后将接收到的参数添加到这个副本的末尾，然后返回新构建的数组
　　return QuickSort(left).concat(mid,QuickSort(right))

}
console.log("原数组是:" + newArr)
console.log("排序后:" + "\n")
tools.show(QuickSort(newArr))

console.log("该数组是否已经排序完成:" + tools.isSorted(QuickSort(newArr),"up"))

