/*
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
路径可以从矩阵中的任意一个格子开始，
每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 
例如[a b c 
    e s f
    c s a 
    d e e]是3*4矩阵，其包含字符串"bcced"的路径，
但是矩阵中不包含“abcb”路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，
路径不能再次进入该格子。

 */


function hasPath(matrix, rows, cols, path) {
    //可以看出matrix是一个二维数组组成的数组
    if (matrix == null || rows < 1 || cols < 1) {
        return false;
    }
    //接下来要创建一个标记数组，然后循环赋值
    var visited = [];
    for (var i = 0; i < rows; i++) {
        visited[i] = [];
        for (var j = 0; j < cols; j++) {
            visited[i][j] = false;
        }
    }
    for (var m = 0; m < rows; m++) {
        for (var n = 0; n < cols; n++) {
            if (hasPathCore(matrix, m, n, rows, cols, path, visited)) { //从矩阵的第一个点开始遍历
                return true;
            }
        }
    }
    return false;
}

function hasPathCore(matrix, m, n, rows, cols, path, visited) {
    if (m >= 0 && m < rows && n >= 0 && n < cols && !visited[m][n] && matrix[m * cols + n] == path.charAt(0)) { //每次找点的判断条件
        visited[m][n] = true;
        if (path.length == 1 || hasPathCore(matrix, m, n - 1, rows, cols, path.slice(1), visited)) {
            return true };
        if (path.length == 1 || hasPathCore(matrix, m - 1, n, rows, cols, path.slice(1), visited)) {
            return true };
        if (path.length == 1 || hasPathCore(matrix, m, n + 1, rows, cols, path.slice(1), visited)) {
            return true };
        if (path.length == 1 || hasPathCore(matrix, m + 1, n, rows, cols, path.slice(1), visited)) {
            return true };
        visited[m][n] = false; //执行到这里说明这个点走不通重新变为false;
    }
    return false;
}
module.exports = {
    hasPath: hasPath
};
