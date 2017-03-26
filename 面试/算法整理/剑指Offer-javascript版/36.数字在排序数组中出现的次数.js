/*

统计一个数字在排序数组中出现的次数

 */

function GetNumberOfK(data, k)
{
		var n = 0 
    while(data.length){
    	if(data[data.length-1] == k){
    		n++
    	}
    	data.length--
    }
    return n
}
module.exports = {
    GetNumberOfK : GetNumberOfK
};