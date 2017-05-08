/*

A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit on the right.

For example, the above binary watch reads "3:25".

Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

Example:

Input: n = 1
Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
Note:
The order of output does not matter.
The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".

 */

/**
 * @param {number} num
 * @return {string[]}
 */
// 这个题有张图
// 上面 8 4 2 1 代表hour
// 下面 32 16 8 4 2 1 代表minutes
// 随机给一个数字代表灯亮的个数，要求输出所有可能的时间
// 一道排列组合然后再输出的题目
var readBinaryWatch = function(num) {
   var hour,
        minutes,
        numBits,
        result = [],
        hourFormat = "";
    
    for(hour = 0; hour <= 11; hour++){
        for(minutes = 0; minutes <= 59; minutes++){
            // 计算每个数字中“1”位的数量,split(1)可以将1的位置腾出来变成内容空长度为1的位置
            numBits = hour.toString(2).split(1).length - 1;
            numBits += minutes.toString(2).split(1).length - 1;
            console.log(numBits)
            // 如果小时中的位数与请求的数字相同，则将其添加到结果中
            if(numBits === num){
                // Format the output, if the minutes are less than 10 add a zero at the beggining of the string
            	hourFormat = hour.toString() + ":" + (minutes < 10? '0' + minutes.toString() : minutes.toString());
                result.push(hourFormat);
            }
            
        }
    }
    
    return result;
    
};
