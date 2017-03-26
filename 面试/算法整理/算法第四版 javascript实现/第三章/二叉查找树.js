/*
二叉搜索树：顾名思义，树上每个节点最多只有二根分叉；而且左分叉节点的值 < 右分叉节点的值
二叉树（Binary Tree）是另一种树型结构，
它的特点是每个结点至多只有两棵子树（即二叉树中不存在度大于2的结点）
并且，二叉树的子树有左右之分（其次序不能任意颠倒。）

我们定义一个节点。每个节点有一个键，一个值，一个左链接和一个右链接。并设置一个parent指向父节点。

 */

var BST = function() {
    //建立一个Node构造函数
    var Node = function(leftChild, key, value, rightChild, parent) {
            return {
                leftChild: (typeof leftChild === "undefined") ? null : leftChild,
                key: (typeof key === "undefined") ? null : key,
                value: (typeof value === "undefined") ? null : value,
                rightChild: (typeof rightChild === "undefined") ? null : rightChild,
                parent: (typeof parent === "undefined") ? null : parent
            };
        },

        //根节点一开始四无
        root = new Node(),

        searchNode = function(node, key) {
            if (node.key === null) {
                return null; // key not found
            }

            // 转为十进制的key
            var nodeKey = parseInt(node.key, 10);
            // 对键进行比较
            if (key < nodeKey) {
                return searchNode(node.leftChild, key);
            } else if (key > nodeKey) {
                return searchNode(node.rightChild, key);
            } else { // key is equal to node key
                return node.value;
            }
        },

        insertNode = function(node, key, value, parent) {
            // 如果
            if (node.key === null) {
                node.leftChild = new Node();
                node.key = key;
                node.value = value;
                node.rightChild = new Node();
                node.parent = parent;
                return true;
            }

            var nodeKey = parseInt(node.key, 10);

            if (key < nodeKey) {
                insertNode(node.leftChild, key, value, node);
            } else if (key > nodeKey) {
                insertNode(node.rightChild, key, value, node);
            } else { // 如果key相同，则更新节点值
                node.value = value;
                return true;
            }
        },

        //遍历节点,等同于中序遍历
        traverseNode = function(node, callback) {
            // 如果节点存在就左右遍历,根据根左右遍历输出
            if (node.key !== null) {
                traverseNode(node.leftChild, callback);
                callback(node.key, node.value);
                traverseNode(node.rightChild, callback);
            }

            return true;
        },

        // 前序遍历
        preOrderNode = function(node, callback) {
            if (node.key !== null) {
                callback(node.key, node.value);
                preOrderNode(node.leftChild, callback);
                preOrderNode(node.rightChild, callback);
            }

            return true;
        },

        // 后续遍历
        postOrderNode = function(node, callback) {
            if (node.key !== null) {
                postOrderNode(node.leftChild, callback);
                postOrderNode(node.rightChild, callback);
                callback(node.key, node.value);
            }

            return true;
        },

        //根据二叉树特性，最小的节点肯定在左子树最左
        minNode = function(node) {
            while (node.leftChild.key !== null) {
                node = node.leftChild;
            }

            return node.key;
        },

        // //根据二叉树特性，最小的节点肯定在右子树最右
        maxNode = function(node) {
            while (node.rightChild.key !== null) {
                node = node.rightChild;
            }

            return node.key;
        },
        print = function(pRoot) {
            // write code here
            var res = []
            if (!pRoot) return res
            var q = []
            q.push(pRoot)

            while (q.length != 0) {
                var l = 0
                var h = q.length
                var arr = []
                while (l++ < h) {
                    var t = q.shift()

                    arr.push(t.value)
                    if (t.leftChild) q.push(t.leftChild)
                    if (t.rightChild) q.push(t.rightChild)
                }
                res.push(arr)
            }
            return res
        }



    return {

        search: function(key) {
            var keyInt = parseInt(key, 10);

            if (isNaN(keyInt)) {
                return undefined; // key must be a number
            } else {
                return searchNode(root, keyInt);
            }
        },



        insert: function(key, value) {
            var keyInt = parseInt(key, 10);

            if (isNaN(keyInt)) {
                return undefined; // key must be a number
            } else {
                return insertNode(root, keyInt, value, null);
            }
        },


        inOrder: function(callback) {
            if (typeof callback === "undefined") {
                callback = function(key, value) {
                    console.log(key + ": " + value);
                };
            }

            return traverseNode(root, callback);
        },
        preOrder: function() {
            if (typeof callback === "undefined") {
                callback = function(key, value) {
                    console.log(key + ": " + value);
                };
            }

            return preOrderNode(root, callback);
        },

        postOrder: function() {
            if (typeof callback === "undefined") {
                callback = function(key, value) {
                    console.log(key + ": " + value);
                };
            }

            return postOrderNode(root, callback);
        },

        min: function() {
            return minNode(root);
        },

        max: function() {
            return maxNode(root);
        },

        printTree: function() {
            console.log(print(root))
        }
    };
};

/*
 * Tests
 */

var ipTree = new BST();
ipTree.insert(4, "test4");
ipTree.insert(1, "test1");
ipTree.insert(10, "test10");
ipTree.insert(2, "test2");
ipTree.insert(3, "test3");
ipTree.insert(9, "test9");
ipTree.insert(8, "test8");
ipTree.insert(5, "test5");
ipTree.insert(7, "test7");
ipTree.insert(6, "test6");

ipTree.inOrder(function(key, value) {
    console.log("The value of " + key + " is " + value + ".");
});
ipTree.printTree();
// console.log("Searching for 3 results in: " + ipTree.search(3));

// console.log("Min is " + ipTree.min());
// console.log("Max is " + ipTree.max());

// console.log("The successor of root is: " + ipTree.successor());
// console.log("The predecessor of root is: " + ipTree.predecessor());
