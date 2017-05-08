/*

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

 */


//  sliding window algorithm. 
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
public class Solution {
public List<Integer> findAnagrams(String s, String p) {
    int[] chars = new int[26];
    List<Integer> result = new ArrayList<>();

    if (s == null || p == null || s.length() < p.length())
        return result;
    for (char c : p.toCharArray())
        chars[c-'a']++;

    int start = 0, end = 0, count = p.length();
    // Go over the string
    while (end < s.length()) {
        // If the char at start appeared in p, we increase count
        if (end - start == p.length() && chars[s.charAt(start++)-'a']++ >= 0)
            count++;
        // If the char at end appeared in p (since it's not -1 after decreasing), we decrease count
        if (--chars[s.charAt(end++)-'a'] >= 0)
            count--;
        if (count == 0)
            result.add(start);
    }
    
    return result;
}
}