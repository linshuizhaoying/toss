/*

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.

 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var arrx = x.toString(2)
    var arry = y.toString(2)
    // console.log(arrx)
   // console.log(arry)
    while(arrx.length < arry.length){
        arrx = '0' + arrx
    }
    while(arrx.length > arry.length){
        arry = '0' + arry
    }
    console.log(arrx)
    console.log(arry)
    var temp  = 0;
    for(var i = arrx.length; i>=0;i--){
        //console.log("arrx:" + arrx.charAt(i) )
       // console.log("arry:" + arry.charAt(i))
        if(arrx.charAt(i) != arry.charAt(i)){
            temp++
        }
    }
    //console.log(temp)

    return temp
};