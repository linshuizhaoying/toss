/*

定义栈的数据结构，
请在该类型中实现一个能够得到栈最小元素的min函数。

 */

// function Stack() {
//     this.items = []
// }
// Stack.prototype = {
//     constructor: Stack,
//     push: function(item) {
//         this.items.push(items)
//         return this.items
//     },
//     pop: function() {
//         return this.items.pop()
//     },
//     itop: function() {
//         return this.items[this.items.length - 1]
//     },
//     min: function() {
//         var min = this.items[0]
//         for (var i = 0; i < this.items.length; i++) {
//             if (min > this.items[i]) {
//                 min = this.items[i]
//             }
//         }
//         return min
//     }
// }

// var stack  = new Stack()
// function push(node) {
//     stack.push(node)
// }

// function pop() {
//     return stack.pop()
// }

// function top() {
//     return stack.itop()
// }

// function min() {
//     return stack.min()
// }
var arr = [];
function push(node)
{
    // write code here
    arr.push(node);
}
function pop()
{
    // write code here
    return arr.pop();
}
function top()
{
    // write code here
    return arr[0];
}
function min()
{
    // write code here
    return Math.min.apply(Math,arr);
}var data = [];
function push(node)
{
    // write code here
    data.push(node);
}
function pop()
{
    // write code here
    return data.pop();
}
function top()
{
    // write code here
    if (data.length == 0) {
        return null;
    }
     
    return data[data.length - 1];
}
function min()
{
    // write code here
    return Math.min.apply(Math, data);
}
module.exports = {
    push: push,
    pop: pop,
    top: top,
    min: min
};
