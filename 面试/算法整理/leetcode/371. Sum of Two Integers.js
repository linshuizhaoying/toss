/*

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.

 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
     while(b !== 0){
        var temp = a^b;//calculate sum of a and b without thinking the carry 
        b = (a&b)<<1;//calculate the carry
        a = temp;//add sum(without carry) and carry
    }
    return a;
};


// return b==0? a:getSum(a^b, (a&b)<<1)