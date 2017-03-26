/*
输入一颗二叉树和一个整数，
打印出二叉树中结点值的和为输入整数的所有路径。
路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。

 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
var tempArr
var result

function getPath(root, target) {
    tempArr.push(root.val)
    if (root.val == target && root.left == null && root.right == null) {
        result.push(tempArr.slice())
    } else {
        target = target - root.val
        if (root.left != null) {
            getPath(root.left, target)

        }
        if (root.right != null) {
            getPath(root.right, target)

        }
    }

    tempArr.pop()
}

function FindPath(root, expectNumber) {
    if (!root) {
        return []
    }
    tempArr = []
    result = []
    getPath(root, expectNumber)
    return result
}
module.exports = {
    FindPath: FindPath
};
