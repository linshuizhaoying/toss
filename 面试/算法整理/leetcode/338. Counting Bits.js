/*

Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].

Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.

 */

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var arr = []
    for(var i = 0;i<=num;i++){
        var temp = i.toString(2)
        var t = 0
        for(var j = 0;j<temp.length;j++){
            if(temp[j] == 1){
                t++
            }
        }
        arr.push(t)
    }
    return arr
};


//更快的版本
    var f = new Array(num)
    f = [0]
    for (var i=1; i<=num; i++) f[i] = f[i >> 1] + (i & 1);
    return f;


var countBits = function(num) {
    var bits_array = [],
        power_to_seek = 2,
        last_power_visited = 1;

    bits_array[0] = 0;
    
    if(num === 0)
    return bits_array;
    
    bits_array[1] = 1;

    
    for(var i=2;i<=num;++i)
    {
    	if(power_to_seek === i)
    		{
    			bits_array[i] = 1;
    			last_power_visited = power_to_seek;
    			power_to_seek *= 2;
    		}
    	else
	    	{
	    		bits_array[i] = bits_array[last_power_visited] + bits_array[i-last_power_visited];
	    	}    	
    }
    
    
    return bits_array;
};