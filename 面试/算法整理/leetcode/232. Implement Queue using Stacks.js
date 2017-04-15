/*

Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Notes:
You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
 */

/**
 * Initialize your data structure here.
 */
// 题意就是不管你用什么方式，用stack来构造一个queue
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.store = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MyQueue.prototype.push = function(x) {
    this.store.push(x);
};

/**
 * @returns {void}
 */
MyQueue.prototype.pop = function() {
    var temp = ""
    if(!this.empty()){
      temp = this.store[0]
      this.store = this.store.slice(1,this.store.length);
    }
      
        return temp
};

/**
 * @returns {number}
 */
MyQueue.prototype.peek = function() {
    return this.store[0];
};

/**
 * @returns {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.store.length === 0;
};


/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */