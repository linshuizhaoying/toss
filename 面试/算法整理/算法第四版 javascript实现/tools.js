module.exports = {
    getRandomArr: function(n, min, max) {
        var num = 20 || n
        min = 1 || min
        max = 100 || max
        var arr = []
        console.log(num)
        console.log(min)
        console.log(max)
        for (var i = 0; i < num; i++) {
            arr.push(Math.floor(Math.random() * (max - min)) + min)
        }
        return arr
    },

    less: function(a, b) {
        return a < b
    },
    more: function(a, b) {
        return a > b
    },

    // exch将元素交换位置
    exch: function(arr, a, b) {
        var temp;
        temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
    },
    //判断是否已排序
    isSorted: function(arr, direction) {
        if (direction == "up") { //如果从小到大排序
            for (var i = 1; i < arr.length; i++) {
                if (this.less(arr[i], arr[i - 1])) {
                    return false
                }
            }
            return true
        } else if (direction == "down") { //如果从大到小排序
            for (var i = 1; i < arr.length; i++) {
                if (this.more(arr[i], arr[i - 1])) {
                    return false
                }
            }
            return true
        }

    },

    //打印输出
    show: function(arr) {
        console.log(arr.join(' '))
    },
    // 确认二叉堆是否已排序
    binaryHeadChecker: function(output) {
        var k = 1,
            N = output.length - 1;
        while (2 * k < N) {
            var a = 2 * k;
            var b = a + 1;
            var pass = output[a] !== undefined && output[b] !== undefined;
            if (!pass || Math.max(output[a], output[b]) > output[k]) return 'not pass';
            k = a;
        }
        return 'pass';
    }

}
