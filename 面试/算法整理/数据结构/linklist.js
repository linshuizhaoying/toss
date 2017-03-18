var LinkedList = function() {
	this.Node = function(element) {
		this.element = element;
		this.next = null;
	};
	this.head = new this.Node('head');
};

/**
 * Searches our linked list for a given item
 *
 * @param item 			The value of the node we're looking for
 * @return {Node} 	The matching node
 */

LinkedList.prototype.find = function(item) {
	var currNode = this.head;
	while (currNode.element !== item) {
		currNode = currNode.next;
	}
	return currNode;
};

/**
 * Instantiates a new node, and adds it to our linked list
 *
 * @param element			The data to store in the node
 * @param previous 		The value of the node after which we want to add our new one
 */

LinkedList.prototype.insert = function(element, previous) {
	var newNode = new this.Node(element),
		prev = this.find(previous);

	newNode.next = prev.next;
	prev.next = newNode;
};

/**
 * Displays the list's full contents, in the form of an array
 *
 * @return {Array} 		The contents of the list, starting from head
 */

LinkedList.prototype.seeAll = function() {
	var currNode = this.head,
		contents = [];
		
	while (currNode.next !== null) {
		contents.push(currNode.next.element);
		currNode = currNode.next;
	}
	return contents;
};

/**
 * Finds the node *before* another node, to allow for deletion
 *
 * @param item 			The value of the node we're interested in
 * @return {Node} 	The node that precedes it
 */

LinkedList.prototype.findPrevious = function(item) {
	var currNode = this.head;
	while (currNode.next !== null && currNode.next.element !== item) {
		currNode = currNode.next;
	}
	return currNode;
};

/**
 * Removes a node
 *
 * @param item 			The value of the node we want to remove
 */

LinkedList.prototype.remove = function(item) {
	var prevNode = this.findPrevious(item);
	if (prevNode.next !== null) {
		prevNode.next = prevNode.next.next;
	}
};

module.exports = LinkedList;