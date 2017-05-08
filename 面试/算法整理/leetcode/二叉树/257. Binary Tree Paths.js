/*

Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]

 */

/**
 * @param {TreeNode} root
 * @return {string[]}
 */

var binaryTreePaths = function(root) {
    var result = []
    if (root != null) {
        search(root, "", result)
    }
    return result
};

function search(root, path, result) {

    if (root.left == null && root.right == null) {
        result.push(path + root.val)
    }
    if (root.left != null) {
        search(root.left, path + root.val + "->", result)

    }
    if (root.right != null) {
        search(root.right, path + root.val  + "->", result)

    }
}
