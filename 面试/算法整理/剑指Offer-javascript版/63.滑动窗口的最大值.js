/*

给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，
他们的最大值分别为{4,4,6,6,6,5}；
 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个：
  {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}，
   {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}，
    {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。

 */

function max(arr){
	var max = arr[0]
	for (var i = 1 ;i<arr.length;i++) {
			if(max< arr[i]){
				max = arr[i]
			}
	}
	return max
}
function maxInWindows(num, size)
{
	  var result = []
		if(num.length == 0 || size == 0 ){
			return {}
		}

    for(var i = 0;i<num.length -size+1;i++){
    	result.push(max(num.slice(i,i+size)))
    }
    return result
}
module.exports = {
    maxInWindows : maxInWindows
};