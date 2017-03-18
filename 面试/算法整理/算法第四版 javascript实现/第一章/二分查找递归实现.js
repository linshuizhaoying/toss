function start(key, arr) {
	  // 二分查找是有序查找，如果无序需要排序
		arr.sort()
    return rank(key, arr, 0, arr.length - 1)

}

function rank(key, arr, lo, hi) {
    if (lo > hi) {
        return -1
    }

    var mid = Math.floor(lo + (hi - lo) / 2) //向下取整
    console.log(lo)
    console.log(hi)
    console.log(mid)

    if (key < arr[mid]) {
    	  // 如果目标值比现阶段中间值小，继续在左半边查找
        return rank(key, arr, lo, mid - 1) 
    } else if (key > arr[mid]) {
      	// 如果目标值比现阶段中间值大，继续在右半边查找
        return rank(key, arr, mid + 1, hi)
    } else {
    	  console.log(arr)
        return mid
    }

}

start(6, [2, 3, 4, 6, 3, 7])
