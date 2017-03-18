/*
二叉堆能实现优先队列的基本操作。
二叉堆的数组中，每个元素要保证大于等于另两个特定位置的元素。这些元素又至少要大于等于数组中的另外两个元素。
将其转为树结构。(这称为最大堆,也有最小堆。)

在堆有序的二叉树中，每个节点都小于等于它的父节点。
根节点是堆有序的二叉树中的最大节点。

二叉堆 是一组能够用堆有序的完全二叉树排序的元素。并在数组中按照层级储存。(不使用数组的第一个元素)
在一个二叉堆中，位置k的结点的父结点的位置为[k/2] 它的两个子节点的位置分别为2k和2k+1
可以通过计算数组的索引在树种上下移动
从a[k]向上一层就令k等于k/2，向下一层就令k等于2k或2k+1

用N+1长度的数组表示一个大小为N的二叉堆，不使用数组第一个元素Array[0]


堆的有序化为:打破堆的状态，然后再遍历堆并按照要求将堆的状态恢复。

由下至上的堆有序化(上浮)：
如果一个子节点比它父节点大了，那么交换它和它父节点的位置。如果交换后又比现在的父节点大，
那么持续这个动作直到条件不符。位置k的节点的父节点的位置是[k/2]

由上至下的堆有序化(下沉)
某个父节点变得比它两个子节点或是其中一个更小，通过将它和它的两个子节点中较大者交换来恢复堆。
交换可能还比子节点小，不断用相同方式将其修复。

 */


var tools = require('../tools.js')
var newArr = tools.getRandomArr() 


function heapSort(arr) {
  return sort(arr);

  function sort (arr){
    var N = arr.length - 1;
    for(var k = N >> 2; k >= 1; k--) {
      arr = sink(arr, k, N);
    }
    while(N > 1) {
      arr[1] = [arr[N], arr[N] = arr[1]][0];
      N--;
      arr = sink(arr, 1, N);
    }
    return arr;
  }
  function sink(arr, k, N) {
    while(2 * k <= N) {
      var j = 2 * k;
      if(j < N && arr[j] < arr[j + 1]) j++;
      if(arr[k] >= arr[j]) break;
      arr[k] = [arr[j], arr[j] = arr[k]][0];
      k = j;
    }
    return arr;
  }
}


console.log("原数组是:" + newArr)
console.log("排序后:" + "\n")
tools.show(heapSort(newArr))

console.log("该数组是否已经排序完成:" + tools.binaryHeadChecker(heapSort(newArr),"up"))











