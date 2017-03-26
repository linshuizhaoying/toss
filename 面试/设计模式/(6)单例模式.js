/*
  单例模式：
  只允许实例化一次对象类。有时也用一个对象来规划一个命名空间。井井有条管理对象上的属性和方法。

 */

function $(id){
	return document.getElementById(id)
}

//  单例模式（创建命名空间）
var A = {
  Util: {
    util_method1: function() {},
    util_method2: function() {}
  },
  Tool: {
    tool_method1: function() {},
    tool_method2: function() {}
  },
  Ajax: {
    get: function() {},
    post: function() {}
  },
  others: {
    // ...
  }
};

A.Util.util_method2();
A.Tool.tool_method1();
A.Ajax.get();

//静态变量（无法修改的静态变量）
var Config = (function() {
  // 私有变量
  var config = {
    MAX_NUM: 100,
    MIN_NUM: 1,
    COUNT: 1000
  };

  // 返回取值器对象
  return {
    // 取值器方法
    get: function(name) {
      return config[name] ? config[name] : null;
    }
  }
})();

var count = Config.get('COUNT');


//惰性单例（有时候对于单例对象需要延迟创建，所以在单例中还存在一种延迟创建的形式，有人也称之为‘惰性创建’）
//
// 惰性载入单例
var LazySingle = (function() {

  // 单例实例引用
  var _instance = null;

  // 单例
  function Single() {
    // 这里定义私有属性和方法
    return {
      publicMethod: function() {},
      publicProperty: '1.0'
    }
  }

  return function() {

    if (!_instance) {
      _instance = Single();
    }

    // 返回单例
    return _instance;
  }
})();


console.log( LazySingle().publicProperty ); // 1.0
console.log( LazySingle() === LazySingle() ); // true

