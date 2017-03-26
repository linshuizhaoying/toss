/*


在一个字符串(1<=字符串长度<=10000，全部由大写字母组成)中找到第一个只出现一次的字符,并返回它的位置

 */


function FirstNotRepeatingChar(str) {
    if (str.length == 0) {
        return -1
    }
    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
            return i
        }
    }
    return -1
}
module.exports = {
    FirstNotRepeatingChar: FirstNotRepeatingChar
};
