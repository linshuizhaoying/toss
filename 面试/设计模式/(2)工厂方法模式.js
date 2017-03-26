/*
	通过对产品类的抽象使其创建业务主要负责于创建多类产品的实例

 */

var Factory = function(type, text) {
  if (this instanceof Factory) {
    this[type](text);
  } else {
    return new Factory(type, text);
  }
};

Factory.prototype = {
  javascript: function(text) {
    console.log(text + 'javascript');
  },
  nodejs: function(text) {
    console.log(text + 'nodejs');
  }
};

Factory('javascript', '万能的');