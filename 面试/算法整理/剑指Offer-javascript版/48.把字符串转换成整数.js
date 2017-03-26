/*

题目描述
将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。
数值为0或者字符串不是一个合法的数值则返回0 
输入描述:
输入一个字符串,包括数字字母符号,可以为空


输出描述:
如果是合法的数值表达则返回该数字，否则返回0

输入例子:
+2147483647
    1a33

输出例子:
2147483647
    0
 */

function checkNum(str){
	  var temp = []
	  for(var i = 0;i<str.length;i++){
    	if(/\d/.test(str[i])){
    		temp.push(str[i])
    	}else{
    		return 0
    	}
    }
    return temp.join("")
}

function StrToInt(str)
{
    if(str.length == 0 || str == "+" || str == "-"){
    	return 0
    }
    var result = 0
    var operate=""
    if(str[0] == "+" || str[0] == "-"){
    	result = checkNum(str.slice(1))
    	operate = str[0]
    }else{
    	result = checkNum(str.slice())
    }
   return operate + parseInt(result)
}
module.exports = {
    StrToInt : StrToInt
};