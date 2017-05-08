/*

Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocat
e extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

 */

var removeElement = function(nums, val) {
    var begin = 0;
    for (var i = 0; i < nums.length; i++)
        if (nums[i] != val) nums[begin++] = nums[i];
    return begin;
};


var count = 0;
var start = 0;

for (i = 0; i < nums.length; i++) {

    if (nums[i] == val) {
        nums.splice(i, 1);
        i--;
    }

}
