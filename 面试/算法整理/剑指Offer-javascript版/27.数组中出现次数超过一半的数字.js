/*

数组中有一个数字出现的次数超过数组长度的一半
请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

 */

function MoreThanHalfNum_Solution(numbers)
{		
	 if(typeof numbers ==='undefined'|| numbers===null || numbers.length===0) return 0;
   var a={};
    numbers.forEach(function(e,i){
        if(a[e]){
            a[e]++;
        }else{
            a[e]=1;
        }
    });
    for(var i in a){
        if(a[i]>numbers.length/2)
            return +i;
    }
    return 0;
}
module.exports = {
    MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
};