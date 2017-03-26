/*


输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
例如，如果输入如下矩阵： 1 2 3 4
										 5 6 7 8 
										 9 10 11 12 
										 13 14 15 16 

则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

 */

function printMatrix(matrix) {
    if (matrix == null) {
        return
    }
    var rows = matrix.length
    var cols = matrix[0].length
    var result = []
    var left = 0,
        top = 0,
        right = cols - 1,
        bottom = rows - 1
    while (left <= right && top <= bottom) {
        // left to right 打印一行后下移一位
        for (var i = left; i <= right; i++) {
            result.push(matrix[top][i])
        }
        // top to bottom 从上到下打印一行后左移
        for (var i = top + 1; i <= bottom; i++) {
            result.push(matrix[i][right])
        }
        // right to left 
        if (top != bottom) {
            // 此时在右下角，起始需要往左走一步
            for (var i = right - 1; i >= left; i--) {
                result.push(matrix[bottom][i])
            }
        }
        if (left != right) {
            for (var i = bottom - 1; i > top; i--) {
                result.push(matrix[i][left])
            }
        }
        left++
        top++
        right--
        bottom--
    }
    return result
}
module.exports = {
    printMatrix: printMatrix
};
