/*

Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.

 */


/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 給一包含非數整數的陣列，其中每一個值代表該位數的值，對這個陣列加1。。
var plusOne = function(digits) {
  for(var i = digits.length - 1; i >= 0; i--){
      console.log(digits)
    if(++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  digits.unshift(1);

  return digits;
};