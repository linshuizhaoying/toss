var Queue = function() {
	this.dataStore = [];
};

Queue.prototype.enqueue = function(item) {
	this.dataStore.push(item);
};

Queue.prototype.dequeue = function() {
	return this.dataStore.shift();
};

Queue.prototype.peek = function() {
	return this.dataStore[0];
};

Queue.prototype.seeAll = function() {
	return this.dataStore.join('\n');
};

Queue.prototype.isEmpty = function() {
	return this.dataStore.length === 0;
};

Queue.prototype.getLength = function() {
	return this.dataStore.length;
};

module.exports = Queue;