/*

Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
        var f = Number.MIN_SAFE_INTEGER;
        var s = Number.MIN_SAFE_INTEGER;
        var t = Number.MIN_SAFE_INTEGER;
        var hasMin = false;
        for (var v of nums) {	
        	if (v == Number.MIN_SAFE_INTEGER) hasMin = true;
            if (v > f) {
               t = s;
               s = f;
               f = v; 
            } else if (v < f) {
              if (v > s) {
                  t = s;
                  s = v;
              } else if (v <s && v > t) {
                 t = v; 
              }
            }
        }
        
       if (t != Number.MIN_SAFE_INTEGER) return t;
       else {
    	   if (s != Number.MIN_SAFE_INTEGERE && hasMin) return t;
    	   else return f;
       }
};


















