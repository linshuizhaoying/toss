/*

给定一个数组A[0,1,...,n-1],
请构建一个数组B[0,1,...,n-1],
其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。

先算下三角中的连乘，即我们先算出B[i]中的一部分，然后倒过来按上三角中的分布规律，把另一部分也乘进去。
 */

function multiply(array)
{
 if(array.length<=1) return null;
    var res = [];
    res[0] = 1;
    for(var i=1; i<array.length; i++){
        res[i] = res[i-1]*array[i-1];
    }
    var temp = 1;
    for(var j= array.length-2; j>=0; j--){
 
        temp = temp*array[j+1];
        res[j] = res[j]*temp;
    }
    return res;
}
module.exports = {
    multiply : multiply
};