/*

Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.

Example 1:
Input: ["23:59","00:00"]
Output: 1
Note:
The number of time points in the given list is at least 2 and won't exceed 20000.
The input time is legal and ranges from 00:00 to 23:59.

 */

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    timePoints.sort();
    let prev = new Date('2017-03-29T' + timePoints[0]);
    let min = prev - new Date('2017-03-28T' + timePoints[timePoints.length - 1]);
    for (let i = 1; i < timePoints.length; i++) {
        let curr = new Date('2017-03-29T' + timePoints[i]);
        min = Math.min(min, curr - prev);
        prev = curr;
    }
    return min / 60000;
};
