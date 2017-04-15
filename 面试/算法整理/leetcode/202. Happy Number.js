/*

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

 */

/**
 * @param {number} n
 * @return {boolean}
 */
// 讲真。。那个7是我测试用例过了399/401之后一直卡住的。。。然后我就加到判断里了。。然后AC了，总觉得哪里怪怪的
var isHappy = function(n) {
    var str = n.toString()
    var len = str.length
    var result = 0
    if(len == 1){
    	if(str == 1 || str == 7){
    		return true
    	}else{
    		return false
    	}
    }
    for(var i = 0;i<len;i++){
    	result += Math.pow(str[i],2)
    }

    return isHappy(result)
};

//方法2 然而效率也很低
var isHappy = function(n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}


// 方法3 效率很高


var isHappy = function(n) {
    var map = {}, num;
    
    while(!map[n]) {
        map[n] = true;
        
        num = 0
        while(n > 0) {
            num += (n%10) * (n%10);
            n = Math.floor(n/10);
        }
        if(num === 1) {
            return true;
        }
        n = num;
    }
    return false;
    
};
