// less对元素进行大小比较

function less(a, b) {
    return a < b
}

// exch将元素交换位置
function exch(arr, a, b) {
    var temp;
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}
//判断是否已排序
function isSorted(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (less(arr[i], arr[i - 1])) {
            return false
        }
    }
}
}
//打印输出
function show(arr){
	console.log(arr.join(' '))
}


