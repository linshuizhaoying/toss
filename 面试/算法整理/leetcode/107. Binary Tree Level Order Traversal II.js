/*

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]


 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 递归法
var levelOrderBottom = function(root) {
    var result = [];
    var index = 0;
    var recursive = function(node, index){

        if(!node) return; 
        if(index >= result.length) result[index] = [];
        // 类似做了一个map映射，同等级的都自动Push进去
        result[index].push(node.val);
        recursive(node.left, index + 1);
        recursive(node.right, index + 1);
    }
    // 从根节点开始
    recursive(root, 0);
    return result.reverse()
};


var levelOrderBottom = function(root) {
    if (!root) { return []; }
    
    let res = [];
    let queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        let level = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) { queue.push(node.left); }
            if (node.right) { queue.push(node.right); }
        }
        res.unshift(level);
    }
    
    return res;
};

// 方法3

let levelOrderBottom = function (root) {
  if (root) {
    let values = []
    traverseNode(root, values, 0)
    return values.reverse()
  } else {
    return []
  }

}

let traverseNode = function (node, values, level) {
  if (typeof values[level] === 'undefined') {
    values[level] = []
  }
  values[level].push(node.val)

  if (node.left) {
    traverseNode(node.left, values, level + 1)
  }
  if (node.right) {
    traverseNode(node.right, values, level + 1)
  }
}
