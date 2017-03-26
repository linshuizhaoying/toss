/*

请实现一个函数用来找出字符流中第一个只出现一次的字符。
例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。
当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。 
输出描述:
如果当前字符流没有存在出现一次的字符，返回#字符。

 */

function Init()
{
    // write code here
   var  result={};//目的是将其变为全局变量
   global.result =result;  //用到了node的全局变量
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    if(result[ch]){
        result[ch]++;
    }else{
        result[ch]=1;
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    for(var item in result){
        if(result[item]==1){
            return item;
        }
    }
    return "#";
}
module.exports = {
    Init: Init,
    Insert: Insert,
    FirstAppearingOnce: FirstAppearingOnce
};
