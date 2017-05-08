/*

Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".

 */

//solution one

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  return s.split('').reverse().join('');
};

// two

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var temp = []
    var t = s.split('')
    while(t.length !== 0){
    	temp.push(t.pop())
    }
    return temp.join('')
};