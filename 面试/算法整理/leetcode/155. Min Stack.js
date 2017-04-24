/*

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

 */

/**
 * initialize your data structure here.
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minValue;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push([x, this.minValue]);

    if (this.stack.length === 1)
        this.minValue = x;
    else if (x < this.minValue)
        this.minValue = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var items = this.stack.pop();
    this.minValue = items[1];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    console.log(this.stack)
    return this.stack[this.stack.length - 1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minValue;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
