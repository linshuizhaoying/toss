var len = 10
var arr = "1 3 1 2 5 4 3 1 9 10".split(' ')

var findCenter = false
var result = []
for (var i = 1; i < arr.length - 1; i++) {
    // 先找递增的
    if (arr[i - 1] < arr[i] && arr[i] < arr[i + 1] && findCenter == false) {
        result.push(i - 1)
        result.push(i)
    }
    // 找到高峰而且前面有元素

    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1] && result.length > 0 && i - result[result.length - 1] == 1) {
        findCenter = true
        result.push(i)
    }
    // 如果是相邻的

    if (i - result[result.length - 1] == 1 && arr[i] < arr[i - 1]) {
        result.push[i]
    }
    console.log(i)


}
console.log(result)



// url去参数



// url取参数
//http://xx.com/skyxmstar/article?details=56046920
//http://www.abc.com?id=123?asd=x
//http://www.xxx.com?key=1&key=2&t2=3&test=4523#hehe
/*
获取 url 中的参数
1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回数组 

 */
function getUrlParams(url, key) {
    // 思路 截取?之后所有内容，然后正则匹配内容 &
    var str = url == null ? window.location.href : url
    var find = key == null ? 'All' : key
        // 从?开始取字符串,不包括?所以位置下标+1
    var temp = str.substring(str.indexOf('?') + 1)
        //  这里只匹配字母和数字
        //  如果想要特殊字符一起匹配，比如123#123这种
        //  regx = /[\w#]*=[\w#]*/g
        //  参考上面的就可以了
    var regx = /(\w)*=(\w)*/g
        //
    var arr = str.substring(str.indexOf('?') + 1).match(regx)
    var obj = {}
    arr.forEach(function(element, index) {
        var t = element.split('=')
        if (!obj[t[0]]) {
            obj[t[0]] = t[1]
        } else {
            obj[t[0]] += ',' + t[1]
        }
    })
    return find == 'All' ? obj : obj[find]

}











function getQueryObject(url) {
    url = url == null ? window.location.href : url;
    var search = url.substring(url.lastIndexOf("?") + 1);
    var obj = {};
    var reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg, function(rs, $1, $2) {
        var name = decodeURIComponent($1);
        var val = decodeURIComponent($2);
        val = String(val);
        obj[name] = val;
        return rs;
    });
    return obj;
}
