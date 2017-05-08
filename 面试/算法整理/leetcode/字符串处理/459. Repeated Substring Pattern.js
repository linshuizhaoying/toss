/*

Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:
Input: "abab"

Output: True

Explanation: It's the substring "ab" twice.
Example 2:
Input: "aba"

Output: False
Example 3:
Input: "abcabcabcabc"

Output: True

Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

 */
// 这题问的是 给一个非空字符串，判断它是否能够通过截取其中子字符串多次重复拼接获得
// 比如abab 截取ab 重复两次 所以返回true
/**
 * @param {string} s
 * @return {boolean}
 */
// 这里我先想到的是通过匹配去重判断最终是否为空0-0，但感觉似乎会效率很低，不过我们可以先写出来玩玩
// 然而这种只能过小数据集_(:з」∠)_
// var repeatedSubstringPattern = function(s) {
//     var check = false
//     for(var i = 0;i<s.length;i++){
//         var t =s.substring(0,i)
//         var temp = new RegExp(t,'g')
//         console.log(temp)
//         console.log(s.replace(temp,''))
    	
//     	if(s.replace(temp,'') == ''){
//     		check = true
//     	}
    	
//     }
//     return check
// };


var repeatedSubstringPattern = function(str) {
    var len = str.length;
    var half = Math.floor(len / 2);

    for(var i = 1; i <= half; i ++){
        if(len % i !== 0){
            continue;
        }
        var cur = str.substr(0, i);
        var flag = true;
        for(var j = i; j <= len - i; j += i){
            if(str.substr(j, i) !== cur){
                flag = false;
                break;
            }
        }
        if(flag){
            return true;
        }
    }
    return false;
};


// 看别人题解的时候看到一个标题kmp
// Knuth-Morris-Pratt 字符串查找算法（常简称为“KMP算法”）可在一个主“文本字符串”S内查找一个“词”W的出现位置。
// 此算法通过运用对这个词在不匹配时本身就包含足够的信息来确定下一个匹配将在哪里开始的发现，
// 从而避免重新检查先前匹配的字符。
var helper  = function(strn) {
    var lps = new Array(strn.length);
    lps[0] = 0;
    var i = 1;
    var length = 0;
    
    while(i<strn.length) {
        if(strn.charAt(i) === strn.charAt(length)) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if(length) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
};


var repeatedSubstringPattern = function(strn) {
    var lps = helper(strn);
    var n = strn.length;
    var lenn = lps[lps.length - 1];
    //n%(n - lenn) 这句比较精髓
    if(lenn && n%(n - lenn) === 0) {
        return true;
    } else {
        return false;
    }
};
