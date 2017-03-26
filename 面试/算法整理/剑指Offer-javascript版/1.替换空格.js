/*


请实现一个函数，将一个字符串中的空格替换成“%20”。
例如，当字符串为We Are Happy.
则经过替换之后的字符串为We%20Are%20Happy
 */

// 匹配空格,这里匹配了一连串空白，题目要求匹配单独的一个，不连续
// this.replace(/\s+/g, "")


function replaceSpace(str)
{
    return str.replace(/\s/g,"%20")
}
module.exports = {
    replaceSpace : replaceSpace
};