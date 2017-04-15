/*
You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer.

Example 1:

n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
Example 2:

n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.

 */


/**
 * @param {number} n
 * @return {number}
 */
// 超时版
var arrangeCoins = function(n) {
    var i =0
    var all = 0
    while(all<=n){
    	i +=1
    	all +=i
    	
    	console.log(i)
    }
    return all == n ? i :i-1
};


/**
 * @param {number} n
 * @return {number}
 */

/*

(1 + X) * X = 2n
4X * X + 4 * X = 8n
(2X + 1)(2X + 1) - 1 = 8n
X = (Math.sqrt(8 * n + 1) - 1)/ 2

 */
var arrangeCoins = function(n) {
       return Math.floor((Math.sqrt((8 * n) + 1) -1 )/2);
};
