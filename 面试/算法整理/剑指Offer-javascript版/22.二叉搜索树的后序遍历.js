/*


输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
如果是则输出Yes,否则输出No。
假设输入的数组的任意两个数字都互不相同。
 
BST的后序序列的合法序列是，对于一个序列S，
最后一个元素是x （也就是根），
如果去掉最后一个元素的序列为T，那么T满足：
T可以分成两段，前一段（左子树）小于x，
后一段（右子树）大于x，
且这两段（子树）都是合法的后序序列。完美的递归定义 : ) 。

 */

function verify(arr) {
    if (arr.length <= 3) {
        return true
    }
    var root = arr[arr.length - 1]
    var left = []
    var right = []
        // 找到左子树,划分右子树
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < root) {
            left.push(arr[i])
        } else {
            right = arr.slice(i, arr.length - 1)
            break
        }
    }
    // 右子树为空说明到底了
    if (right.length == 0) {
        return true
    }
    for (var i = 0; i < right.length; i++) {
        if (right[i] < root) {
            return false
        }
    }

    return verify(left) && verify(right)
}

function VerifySquenceOfBST(sequence) {
    if (!sequence || sequence.length == 0) {
        return false
    }

    return verify(sequence)

}
module.exports = {
    VerifySquenceOfBST: VerifySquenceOfBST
};
