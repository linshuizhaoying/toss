/*

输入一个字符串,按字典序打印出该字符串中字符的所有排列。
例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。 
输入描述:
输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母

 */

var result = []

function Permutation(str) {
        //分割字符串为数组并排序
    var arr = str.split("").sort()
    getArr(arr, 0)
    
    return result.sort()
}

function getArr(arr, pos) {
    if (pos == arr.length - 1) {
        result.push(arr.join(''))
    }
    for (var i = pos; i < arr.length; i++) {
        if (i == pos || arr[i] != arr[pos]) {
            swap(arr, pos, i)
            getArr(arr, pos + 1)
            swap(arr, pos, i)
        }
    }
}

function swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
module.exports = {
    Permutation: Permutation
};
