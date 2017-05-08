/*

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.



 */
// 只考虑小写字母，因为掺杂了其他字符还有空格和符号这些，因此，正则过滤掉然后再判断回文
// 直接考虑白名单正则
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //console.log(s.trim().toLowerCase().match(/\w+/g))
    if (s.trim().toLowerCase().match(/\w+/g) == null || s.trim().toLowerCase().match(/\w+/g).length == 0) {
        return true
    }

    var regxS = s.trim().toLowerCase().match(/\w+/g)
    regxS = regxS.join('')
        //console.log(Array.from(regxS.toString()))
    return Array.from(regxS.toString()).reverse().toString() == Array.from(regxS.toString()).toString()
};


var str = s.replace(/\W/g, '');
var res = Array.prototype.map.call(str, function(c) {
    return c;
}).reverse().join('');

return str.toLowerCase() === res.toLowerCase();


var isPalindrome = function(s) {
    var strippedString = s.replace(/\W/g, '');
    var reversedString = strippedString.split('').reverse().join('');
    
    return strippedString.toLowerCase() == reversedString.toLowerCase();
    
    
};