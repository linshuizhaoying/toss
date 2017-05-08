/*

Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.

 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  if(num < 1 || num > 3999) return "";
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var ret = "";
    numbers.forEach(function(value, i) {
       if(num > 0) {
           if((~~(num/value)) > 0) {
               var times = ~~(num / value);
               num -= (times * value);
               while(times > 0) {
                   ret += symbols[i];
                   times--;
               }
           }
       } 
    });
    return ret;
};