/*
 
  数组

*/

// 查找
function ArrayFind(){
	 var a = ["23","666","string","offer"]
   return a.indexOf("offer") >= 0 ? "找到了" : "未找到" 
}


// 从数组中间位置添加和删除元素

// Error Example:

function avaerageAdd(){
  var nums = [1,2,3,4,5,6,7]
  var newElements = [233,666]
  nums.splice(Math.floor(nums.length / 2),0,newElements) 
  return nums  //[1, 2, 3, Array[2], 4, 5, 6, 7]
}

// Better:

function avaerageAdd(){
  var nums = [1,2,3,4,5,6,7,8]
  var newElements = [233,666]
  nums.splice.apply(nums, [Math.floor(nums.length)/2, 0].concat(newElements))
  return nums // [1, 2, 3, 4, 233, 666, 5, 6, 7, 8]
}



// 判定给定字符串是否回文

function isPalindrome(word){
  var s = new Stack()
  for (var i = 0; i < word.length; ++i) {
     s.push(word[i])	 
  }
  var rword = ""
  while(s.length() > 0){
  	rword += s.pop()
  }
  if(word == rword){
  	return true
  }else{
  	return false
  }
}



// 排序

// 冒泡排序
// 冒泡排序就是从最开始的位置或结尾的位置反方向对比，如果比它大/小,就交换然后继续走，第一遍走完,最后一个位置是最大值或者最小值

function exchange(array, i, j) {
	var t = array[i];
	array[i] = array[j];
	array[j] = t;
}

function bubbleSort(numbers) {
	for (var i = 0; i < numbers.length; i++) {
		for (var j = 0; j < numbers.length - i; j++) {
			if (numbers[j] > numbers[j + 1]) {
				exchange(numbers, j, j + 1);
			}
		}
		console.log(numbers.toString())
	}
	return numbers;
}
var nums = [2,3,4,3,1,5,7,122,341,-1]
console.log(bubbleSort(nums))

// 快速排序

// 快排就是一开始找个中介，然后把比它小的放左边，比它大的放右边，然后重新对中介两边的数据各自重新找个中介,如此循环。
function quickSort(arr) {
　　if (arr.length <= 1) { return arr }
	 console.log("原数组是:" + arr)
　　var pivotIndex = Math.floor(arr.length / 2)
　　var pivot = arr.splice(pivotIndex, 1)[0]
　　var left = []
　　var right = []
   console.log("将中介提取出来后数组是:" + arr)
　　for (var i = 0 ; i < arr.length ; i++){
			 console.log("此刻中介是:" + pivot + "当前元素是:" + arr[i])
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i])
					console.log("移动" + arr[i] + "到左边")
　　　　} else {
　　　　　　right.push(arr[i])
					console.log("移动" + arr[i] + "到右边")
　　　　}

　　}
　　return quickSort(left).concat([pivot], quickSort(right))
}
var nums = [2,3,4,3,1,5,7,122,341,-1]
console.log(quickSort(nums))


// 选择排序
// 选择数组第一个元素，将它和其它所有对比，跟最小的交换，然后从第二个开始，继续跟后面所有的比，跟剩余里面最小的交换。循环。

function selectionSort(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    var min = i;
    // Check the rest of the array: is anything smaller?
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[min]) {
        min = j;
      }
    }
    if (i !== min) {
      exchange(numbers, i, min);
    }
  }
  return numbers;
}
var nums = [2,3,4,3,1,5,7,122,341,-1]
console.log(selectionSort(nums))

// 插入排序
// 插入排序它将数组分成“已排序”和“未排序”两部分，一开始的时候，“已排序”的部分只有一个元素，然后将它后面一个元素从“未排序”部分插入“已排序”部分，从而“已排序”部分增加一个元素，“未排序”部分减少一个元素。以此类推，完成全部排序。
function insertionSort(numbers) {
  console.log("原数组:" + numbers)
  for (var i = 0; i < numbers.length; i++) {
        /*
         * 当已排序部分的当前元素大于value，
         * 就将当前元素向后移一位，再将前一位与value比较
         */
    for (var j = i; j > 0 && numbers[j] < numbers[j - 1]; j--) {
      // If the array is already sorted, we never enter this inner loop!
      exchange(numbers, j, j - 1);
      console.log("此时数组:" + numbers)
    }
  }
  return numbers;
};

var nums = [2,3,4,3,1,5,7,122,341,-1]
console.log(insertionSort(nums))

// 希尔排序
// 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行依次直接插入排序
// 假设nums = [2,3,4,3,1,5,7,122,341,-1]
// 如果间隔为3，第一趟将数组下标为 0,4,8 || 1,5,9 || 2,6,10 || 3,7, 分别取出来子序列内部进行排序
// 然后再间隔为1时,全部直接插入排序

function shellsort(numbers,gap) {
  console.log("原数组:" + numbers)
  var h = 1;
  gap = gap || 3;
  while (h < numbers.length / 3) {
    h = (3 * h) + 1;
  }

  while (h >= 1) {
    console.log("此时h:" + h)
    for (var i = h; i < numbers.length; i++) {
      for (var j = i; j >= h && numbers[j] < numbers[j - h]; j -= h) {
        exchange(numbers, j, j - h);
        console.log("此时数组:" + numbers)
      }
      
    }
    h = --h / 3; 
  }
  return numbers;
}
var nums = [2,3,4,3,1,5,7,122,341,-1]
console.log(shellsort(nums))

// 归并算法
// 指的是将两个已经排序的序列合并成一个序列的操作。归并排序算法依赖归并操作
// 

function mergeSort(numbers) {
    if (numbers.length < 2) {
        return numbers;
    }
 
    var middle = Math.floor(numbers.length / 2),
        left = numbers.slice(0, middle),
        right = numbers.slice(middle),
        params = merge(mergeSort(left), mergeSort(right));
 
    params.unshift(0, numbers.length);
    numbers.splice.apply(numbers, params);
 
    return numbers;
 
    function merge(left, right) {
        var result = [],
            il = 0,
            ir = 0;
 
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }
        return result.concat(left.slice(il)) .concat(right.slice(ir));
    }
}
var nums = [2,3,4,3,1,5,7,122,341,-1]
console.log(mergeSort(nums))



//搜索


// 二分搜索 二分搜索很简单，但是需要注意它必须是有序的


function binSearch(arr, data) {
	arr = arr.sort(function(a, b) {
    return a - b;
  })
	console.log(arr)
  var upperBound = arr.length-1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var mid = Math.floor((upperBound + lowerBound) / 2);
    console.log("Current midpoint: " + mid);
    if (arr[mid] < data) {
      lowerBound = mid + 1;
      }
    else if (arr[mid] > data) {
      upperBound = mid - 1;
      }
    else {
      return mid;
      }
    }
  return -1;
}

var nums = [2,3,4,3,1,5,7,122,341,-1]
console.log(binSearch(nums,122))








