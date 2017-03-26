/*

输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

 */

// 转成二进制，然而字符串化，然后遍历
function NumberOf1(n)
{
    if(typeof n != 'number'){
    	return
    }
    if(n < 0){
    	// 强制转成有符号整数的二进制补码表示
    	n = n >>> 0
    }
    // 转为二进制
    var temp = n.toString(2)
    var n = 0
   	for(var i = 0;i<temp.length;i++){
   		if (temp[i] == 1){
   			n++
   		}
   	}
    return n 
}
module.exports = {
    NumberOf1 : NumberOf1
};