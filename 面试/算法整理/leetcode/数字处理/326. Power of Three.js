/*

Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?

 */

var isPowerOfThree = function(n) {
    return ( n>0 &&  Math.pow(3,19)%n==0);
};

// 利用二进制。。。厉害了我的哥

var isPowerOfThree = function(n) {
    return /^10*$/.test(n.toString(3));
};