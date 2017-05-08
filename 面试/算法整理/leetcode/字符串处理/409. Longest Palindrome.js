/*

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.

 */




/**
 * @param {string} s
 * @return {number}
 */
// 题意 给一串字符串，找到其能组成回文字符串的最大长度，区分大小写
// 假设如果是回文
// 要么其中字符都是偶数，like aabb
// 要么最中间只有一个奇数，like aacbb
var longestPalindrome = function(s) {
    var single = 0
    var double = 0
    var map = []
    var a = 'a'.charCodeAt()
    for (var i = 0; i < s.length; i++) {
        if (!map[s.charCodeAt(i) - a]) {
            map[s.charCodeAt(i) - a] = 1
        } else {
            map[s.charCodeAt(i) - a] += 1;
        }

    }
    console.log(map)
    for (var i = 0; i < s.length; i++) {
        if (map[s.charCodeAt(i) - a] == 1) {
            // single
            single += 1
            console.log('single:'+map[s.charCodeAt(i) - a])
        }  else if (map[s.charCodeAt(i) - a] % 2 == 0) {
            console.log('double:' + map[s.charCodeAt(i) - a])
            double += map[s.charCodeAt(i) - a]
            map[s.charCodeAt(i) - a] = -1
                // if aaa, ccccc
        }else if(map[s.charCodeAt(i) - a]  > 2 && map[s.charCodeAt(i) - a] % 2 !=0) {
            console.log('max:' + map[s.charCodeAt(i) - a])
           	// 这里是考虑ccc这种情况，我们把偶数的字符拆出来给了double
           	// 那么剩下的添加给single
           	// 我们不需要考虑single的总长，因为最后只要single长度大于1
           	// 我们最后就默认取和
            double += map[s.charCodeAt(i) - a] - 1
            single += 1
            map[s.charCodeAt(i) - a] = -1
        }

    }
    console.log(map)
    console.log(single)
    console.log(double)
    return single > 0 ? double + 1 : double
};


//解法2


   var map = {};
    var sArray = s.split('');
    var result = 0;
    var n = 0;
    
    for(var i=0;i<sArray.length;i++){
    	map[sArray[i]] = map[sArray[i]] + 1 || 1;
    }
    
    Object.keys(map).forEach(function(x){
        if(map[x]%2 === 0){
    	    result += map[x];
        }
        else{
            result += map[x]-1;
            //n for the one which we can put it in the middle
            n=1;
        }
    });

    return result+n;


 // 解法3 学到了object.keys能帮助我们快速找到散列坐标
 

  if (!s || s.length === 0) { return 0; }
    
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        if (hash.hasOwnProperty(s[i])) {
            hash[s[i]]++;
        } else {
            hash[s[i]] = 1;
        }
    }
    
    let len = 0;
    let hasOdd = false;
    for (let i = 0; i < Object.keys(hash).length; i++) {
        let key = Object.keys(hash)[i];
        if (hash[key] % 2 === 0) {
            len += hash[key];
        } else {
            len += hash[key] - 1;
            hasOdd = true;
        }
    }
    
    return hasOdd ? len + 1 : len;

