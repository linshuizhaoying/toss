/*


地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，
每一次只能向左，右，上，下四个方向移动一格，
但是不能进入行坐标和列坐标的数位之和大于k的格子。 
例如，当k为18时，机器人能够进入方格（35,37），
因为3+5+3+7 = 18。但是，它不能进入方格（35,38）
，因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
 */

function movingCount(threshold, rows, cols) {
    // write code here
    var mark = [];
    for (var i = 0; i < rows; ++i) {
        var tmpMark = [];
        for (var j = 0; j < cols; ++j) {
            tmpMark.push(false);
        }
        mark.push(tmpMark);
    }


    return solution(rows, cols, 0, 0, mark, threshold);
}

function solution(rows, cols, i, j, mark, threshold) {
    if (!isValid(i, j, threshold) || i < 0 || j < 0 || i >= rows || j >= cols || mark[i][j]) {
        return 0;
    }

    mark[i][j] = true;

    var count = 1;

    count += solution(rows, cols, i + 1, j, mark, threshold);
    count += solution(rows, cols, i - 1, j, mark, threshold);
    count += solution(rows, cols, i, j + 1, mark, threshold);
    count += solution(rows, cols, i, j - 1, mark, threshold);

    return count;
}

function isValid(i, j, threshold) {
    var str = i + "" + j;

    var sum = 0;
    str.split('').forEach(function(a) {
        sum += parseInt(a);
    });

    return sum <= threshold;
}
