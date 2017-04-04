/*

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Example 1:
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
Example 2:
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.

 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 思路3
    var min = prices[0]
    var max = prices[0]
    var temp = []
    for(var i = 1;i<prices.length;i++){
    	if(prices[i]<min){
    		min = prices[i]
    		max = prices[i]
    	}
    	if(prices[i] >max){
    		max = prices[i]
    		temp.push(max-min)
    	}
    	console.log("min:" + min)
    	console.log("max:" + max)
    }
    temp = temp.sort(function compare(a,b){return b-a})
    console.log(temp)
    return temp[0] || 0

};

  // 参考
  var min = Number.MAX_SAFE_INTEGER; 
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;




// 错误思路
var maxProfit = function(prices) {
    // 因为是按日期时间线进行
    // 所以交易必须在购买之后
    // 从左开始找最小的,从右走找最大的，到中间汇合相减，余数大于0说明有最大max
    // 但是遇到 [2,1,2,1,0,0,1]
    // 说明思路错了 重新想
    var mid = prices.length % 2 == 0 ? prices.length / 2 - 1 : Math.floor(prices.length / 2)
    var min = 99999
    var max = -1
    for (var i = 0; i <= mid; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
    }
    for (var j = prices.length - 1; j >= mid; j--) {
        if (prices[j] > max && min != prices[j]) {
            max = prices[j]
        }
    }
    console.log(mid)
    console.log(min)
    console.log(max)
    return max - min > 0 ? max - min : 0
};


var maxProfit = function(prices) {
    // 思路2 
    // 先走一遍找到最小的并记下坐标
    // 从最小的开始往右，找到最大的,相减
    // 遇到[2,4,1] 思路错误
    var min = 9999999
    var minIndex = -1
    var max = -1
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
            minIndex = i
        }
    }
    for (var j = minIndex + 1; j < prices.length; j++) {
        if (prices[j] > max) {
            max = prices[j]
        }
    }

    return max - min > 0 ? max - min : 0


};



var maxProfit = function(prices) {
    // 思路3
    var min = prices[0]
    var max = prices[0]
    var temp = []
    for(var i = 1;i<prices.length;i++){
    	if(prices[i]<min){
    		min = prices[i]
    		max = prices[i]
    	}
    	if(prices[i] >max){
    		max = prices[i]
    		temp.push(max-min)
    	}
    	console.log("min:" + min)
    	console.log("max:" + max)
    }
    temp = temp.sort(function compare(a,b){a-b})
    console.log(temp)
    return temp[0]

};

