/*

Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

Note:

All letters in hexadecimal (a-f) must be in lowercase.
The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
The given number is guaranteed to fit within the range of a 32-bit signed integer.
You must not use any method provided by the library which converts/formats the number to hex directly.

 */

// 转16进制

// 别的语言方法特别6

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num == 0) return "0";
    var map = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var result = "";
    function toHex(num) {
        if(num == 0) return "0";
        
        while(num != 0){
            result = map[(num & 15)] + result; 
            num = (num >>> 4);
        }
       
    }
    toHex(num)
    return result
};




var toHex = function(num) {
    
   if(num === 0) return '0';
   
   var hexMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
   var hex = '';
   if(num > 0 ) {
   	while(num !== 0) {
    	hex = hexMap[num % 16] + hex;
        num = parseInt(num/16);
    }
   } else {
       hex = toHex(0xffffffff - Math.abs(num) + 1);
   }
   return hex;
};

