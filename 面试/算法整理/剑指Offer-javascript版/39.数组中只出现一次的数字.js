/*

一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。

 */

function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    if(array.length == 0){
    	return []
    }
    var temp = []
    for(var i = 0;i<array.length;i++){
    	if(array.indexOf(array[i]) == array.lastIndexOf(array[i])){
    		temp.push(array[i])
    	}
    }
    return temp.sort()
}
module.exports = {
    FindNumsAppearOnce : FindNumsAppearOnce
};