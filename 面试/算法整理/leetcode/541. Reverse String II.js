/*

Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]

 */

function swap(ary, x, y) {
    const tmp = ary[x];
    ary[x] = ary[y];
    ary[y] = tmp;
}
 
var reverseStr = function(s, k) {
    
    const str = s.split('');
    
    for(let i=0; i<str.length; i += 2 * k) {
        let start = i;
        let end = i + k-1;
        
        // can omit this but saves time on str.join
        if (end > str.length -1) end = str.length -1;
        
        while(start < end) {
            swap(str, start, end);
            start++;
            end--;
        }
        
    }
    
    return str.join('');
};