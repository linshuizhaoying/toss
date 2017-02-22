var Stack = function() {
	this.dataStore = [];
	this.top = 0;
};

Stack.prototype.push = function(element) {
	this.dataStore.push(element);
};

Stack.prototype.pop = function() {
	return this.dataStore.pop();
};

Stack.prototype.peek = function() {
	return this.dataStore[this.dataStore.length - 1];
};

Stack.prototype.length = function() {
	return this.dataStore.length;
};

Stack.prototype.isEmpty = function() {
	return this.dataStore.length === 0;
};

Stack.prototype.seeAll = function() {
	return this.dataStore.join('\n');
};

module.exports = Stack;