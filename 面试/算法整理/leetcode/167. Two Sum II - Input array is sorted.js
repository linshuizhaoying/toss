/*

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

Subscribe to see which companies asked this question.


 */

// 给个数组，给个target，找到数组中能相加等于target的下标
// 给了条件 已经排序，输出从下标1开始


// 错误解法,
var twoSum = function(numbers, target) {
	  var temp = []
	  var find = false
    for (var i = 0; i < numbers.length; i++) {
    	if(!find){
 				for(var j =i+1;j<numbers.length;j++){
 					if(!find){
 						if(numbers[i] + numbers[j]=== target){
 							temp.push(i)
 							temp.push(j)
 							find = true
 						}
 					}else{
 						break;
 					}
 				}

    	}else{
    		break;
    	}
    }
    var result = "index1=" +(temp[0]+1) +", index2=" +(temp[1]+1)
    return result
};



// 正确解法

var twoSum = function(numbers, target) {
    var num = numbers
   var indice = [];
    if (num === null || num.length < 2) return indice;
    var left = 0, right = num.length - 1;
    while (left < right) {
        var v = num[left] + num[right];
        if (v === target) {
            indice[0] = left + 1;
            indice[1] = right + 1;
            break;
        } else if (v > target) {
            right --;
        } else {
            left ++;
        }
    }
    return indice;
};










