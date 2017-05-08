/*

Suppose you have N integers from 1 to N. We define a beautiful arrangement as an array that is constructed by these N numbers successfully if one of the following is true for the ith position (1 ≤ i ≤ N) in this array:

The number at the ith position is divisible by i.
i is divisible by the number at the ith position.
Now given N, how many beautiful arrangements can you construct?

Example 1:
Input: 2
Output: 2
Explanation: 

The first beautiful arrangement is [1, 2]:

Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).

Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).

The second beautiful arrangement is [2, 1]:

Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).

Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.

Note:
N is a positive integer and will not exceed 15.

 */


/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
    var c = 0;
    var s = [];
    (function helper(index) {
        if (index === N + 1) return c++;
        for (var i = 0; i < N; i++) {
            if (!s[i] && (index % (i + 1) === 0 || (i + 1) % index === 0)) {
                s[i] = true;
                helper(index + 1);
                s[i] = false;
            }
        }
    })(1);
    return c;
};


var count = 0;
var hashMap = {};

function solve(N, k, arr) {

    if (arr.length === N + 1) {
        count++;
        // console.log(arr); // print all the permutations
        return;
    }

    for (let i = 1; i <= N; i++) {



        if (hashMap[i]) {
            continue;
        }

        if (k % i === 0 || i % k === 0) {
            arr[k] = i;
            hashMap[i] = true;
            solve(N, k + 1, arr);

            // backtrack
            arr.pop();
            hashMap[i] = false;;
        }
    }

}


solve(N, 1, []);

return count;
