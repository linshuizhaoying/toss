var BST = function() {
	// The Node constructor, nested here because it's specific to binary trees
	this.Node = function(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
	};
	// Other than that, all the contructor needs is an initial root (null) and, defined shortly, the core methods: insert, remove, traverse
	this.root = null;
};

/*
Notes on constructor:
the Node holds data, left, and right
the BST holds only one thing: this.root = null.
(that is, Nodes do most of the heavy lifting)
*/

/**
 * Inserts a new node into our binary search tree
 *
 * @param data: the value we'd like to add
 */

/*
Notes on insert:
1. make a new Node with ur data and left/right set to null
2. if this.root (the current tree's root) is null, set this.root to the new node. Done!
3. If the root *isn't* null, we'll need to insert the node in the right spot.
	* Create variables `current` and `parent`, and set current to the current root.
	* Enter infinite loop: while(true)
	* define parent as current, to store it
	* if data < current.data, current is current.left
	* update current to current.left
	* if it's null, we're there! set parent.left to newNode and break
	* same process on the right
*/

BST.prototype.insert = function(data) {
	var newNode = new this.Node(data, null, null),
		current,
		parent;

	if (this.root === null) {
		// No root yet? Insert new node as root
		this.root = newNode;

	} else {
		// Otherwise, create a root
		current = this.root;

		while (true) { // Keep looping until manual break
			parent = current; // Store `current`, which starts as root
			if (data < current.data) {
				current = current.left; // Update `current` (but remember, `parent` has previous value)
				if (current === null) { // No data? We've reached the bottom!
					parent.left = newNode; // Insert node as left child of `parent`--that is, right where `current` failed as null
					break; // Kills the whole loop
				}
				// If `current` !== null, we exit both if statements (inner: 'current === null', outer: 'data < current.data') and keep looping, now with current updated to current.left
			} else {
				// Same process on the right: set `current` to `current.right`, see if the new val of `current` is null, and--if it is--insert the new node where `current` fails
				current = current.right;
				if (current === null) {
					parent.right = newNode;
					break;
				}
			}
			// If we haven't broken by now, we just keep looping
		}
	}
};

/**
 * Traverses the tree from least to greatest value
 *
 * @param node: where we'd like to start
 */

/*
notes on traversing:
* pass in myBST.root, not my entire myBST (only thing BST knows about is this.root)
* define an inner recursive function that calls itself on node.left and node.right, pushing into an accumulator array
* return the array
* if we're doing it in order (= from least to greatest), we recurse left, push into accumulator, and recurse right
* if we're doing it pre-order (= traverses from root down, favoring left and then right subtrees), it's push, recurse left, recurse right
* if we're doing it post-order (= traverse from bottom up, first on left and then on right), it's left, right, push
*/

BST.prototype.traverseInOrder = function(node) { // (Pass in someInstance.root)
	var recurse = function(node, results) {
		if (node !== null) {
			recurse(node.left, results); // Recurse all the way down the left of the tree
			results.push(node.data); // Once we've reached the min value, add it to the array
			recurse(node.right, results); // Once we bottom out on the left (which === the very smallest #), try to recurse down the right (the next smallest #s)
		}
		return results;
	};
	return recurse(node, []);
};

/**
 * Traverses the tree from the root down, favoring the left and then right subtrees
 *
 * @param node: where we'd like to start
 */

BST.prototype.traversePreOrder = function(node) {
	var recurse = function(node, results) {
		if (node !== null) {
			results.push(node.data); // Logs the data *before* any recursion!
			recurse(node.left, results);
			recurse(node.right, results);
		}
		return results;
	};
	return recurse(node, []);
};

/**
 * Traverses the tree from the bottom up: first on the left, and then on the right
 *
 * @param node: where we'd like to start
 */

BST.prototype.traversePostOrder = function(node) {
	var recurse = function(node, results) {
		if (node !== null) {
			recurse(node.left, results);
			recurse(node.right, results);
			results.push(node.data);
		}
		return results;
	};
	return recurse(node, []);
};

/*
SAMPLE TREE:
1
 \
	9
 / \
2		14
 \
 6
traverseInOrder: 1, 2, 6, 9, 14
traversePreOrder: 1, 9, 2, 6, 14
traversePostOrder: 6, 2, 14, 9, 1
*/

BST.prototype.find = function(data) {
	var current = this.root;
	while (current.data !== data) {
		if (data < current.data) {
			current = current.left;
		} else {
			current = current.right;
		}
		if (current === null) {
			return null;
		}
	}
	return current;
};

module.exports = BST;