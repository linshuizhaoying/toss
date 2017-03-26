/*

访问者模式（Visitor）：针对于对象结构中的元素，定义在不改变该对象的前提下访问结构中元素的新方法。

访问者模式解决数据与数据的操作方法之间的耦合，将数据的操作方法独立于数据，使其可以自由化演变

Object.prototype.toString.call这样的使用方式

 */

// 访问器
var Visitor = (function() {
  return {
    splice: function() {
      // 获取参数，从第二个方法算起
      var args = Array.prototype.splice.call(arguments, 1);

      // 对第一个参数执行splice方法
      return Array.prototype.splice.apply(arguments[0], args);
    },

    push: function() {
      // 获取参数，从第二个方法算起
      var args = Array.prototype.splice.call(arguments, 1);

      return Array.prototype.push.apply(arguments[0], args);
    },

    pop: function() {
      return Array.prototype.pop.apply(arguments[0]);
    }
  };
})();

var a = {};
console.log(a.length);

Visitor.push(a, 1, 2, 3, 4, 5);
console.log(a.length);

Visitor.push(a, 6, 7, 8, 9);
console.log('push:');
console.log(a);
console.log(a.length);

Visitor.pop(a);
console.log('pop:');
console.log(a);
console.log(a.length);

Visitor.splice(a, 2, 2);
console.log('splice:');
console.log(a);
console.log(a.length);

// 主要讲的内容就是 call 和 apply 的应用