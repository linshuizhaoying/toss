/*

Given an integer, return its base 7 string representation.

Example 1:
Input: 100
Output: "202"
Example 2:
Input: -7
Output: "-10"
Note: The input will be in range of [-1e7, 1e7].

 */

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    var a = num
    if(a<0){
        var b = a.toString().split('').slice(1).join('')
        console.log(b)
        return '-' + parseInt(b).toString(7)
    }else{
        return a.toString(7)
    }
    
    
};