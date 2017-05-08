/*

The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.

 */

/**
 * @param {number} n
 * @return {string}
 */
// 题目没看懂~ 没看懂的不止我一个
var countAndSay = function(n) {
    var start = '1';
  var result = '';
  var tmp = 1;
  for (i=0; i<n-1; i++){
    //tmp will count all repeats
    for (var j=0; j<start.length; j++){
      if(start[j] !== start[j+1] || j == start.length - 1){
        result += tmp + start[j];
        tmp = 1;
      } else {
        tmp +=1;
      }
    }
    start = result;
    result = '';
  }
  return start;
};