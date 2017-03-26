/*

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
NOTE：给出的所有元素都大于0，若数组大小为0，请返回0

 */

// 题目是给出一个已经旋转的数组，然后我们需要找到旋转部分，然后取出最小值即可
function minNumberInRotateArray(rotateArray) {
    if (rotateArray.length == 0) {
        return 0
    }
    // 先得到还原数组
    var origin = rotateArray.sort()
        // 找到旋转开始部分
    var start = rotateArray.indexOf(origin[0])
    var sliceArray = rotateArray.slice(start)
    var min = sliceArray[0];
    for (var i = 0; i < sliceArray.length; i++) {
        if (sliceArray[i] < min) {
            min = sliceArray[i]
        }
    }

    return min
}
module.exports = {
    minNumberInRotateArray: minNumberInRotateArray
};
