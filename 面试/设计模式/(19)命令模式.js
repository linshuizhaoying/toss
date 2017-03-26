/*

命令模式（Command）：将请求与实现解耦，并封装成独立对象，从而使不同的请求对客户端的实现参数化。
命令模式是将执行的命令封装，解决命令的发起者与命令的执行者之间的耦合。
每一条命令实质上是一个操作。命令的使用者不必要了解命令的执行者（命令对象）的命令接口是如何实现的，
命令式如何接收的，命令式如何执行的。所有的命令都被存储在命令对象中。

命令模式的有点自然是解决命令使用者之间的耦合。新的命令很容易加入到命令系统中，供使用者使用。
命令的使用具有一致性，多数的命令在一定程度上是简化操作方法的使用的。

命令模式是对一些操作的封装，这就造成每执行一次操作都要调用一次命令对象，增加了系统的复杂度。

 */




'use strict';

/*
 * 实现模块
 */
var ViewCommand = (function() {

  // 模板
  var tpl = {
    product: [
      '<div>',
        '<img src="{#src#}" />',
        '<p>{#text#}</p>',
      '</div>'
    ].join(''),

    title: [
      '<div class="title">',
        '<div class="main">',
          '<h2>{#title#}</h2>',
          '<p>{#tips#}</p>',
        '</div>',
      '</div>'
    ].join(''),
  };

  var html = '';

  // 替换数据
  function formatString(str, obj) {
    return str.replace(/\{#(\w+)#\}/g, function(match, key) {
      return obj[key];
    });
  }

  // 方法集合
  var Action = {
    create: function(data, view) {
      // 如果是数字则把数组中的每一项加进html中
      if (Object.prototype.toString.call(data) === '[object Array]') {
        for (var i = 0; i < data.length; i++) {
          html += formatString(tpl[view], data[i]);
        }
      } else {
        html += formatString(tpl[view], data);
      }
    },
    display: function(container, data, view) {
      // 如果有数据，根据数据创建视图
      if (data) this.create(data, view);

      document.getElementById(container).innerHTML  = html;
      html = '';
    }
  };

  return function excute(command) {
    command.param = Object.prototype.toString.call(command.param) === '[object Array]' ? command.param : [command.param];
    Action[command.cd].apply(Action, command.param);
  }
})();


/*
 * 测试
 */

// 产品展示数据
var productData = [{
  src: 'command/02.jpg',
  text: '绽放的桃花'
},{
  src: 'command/03.jpg',
  text: '阳光下的温馨'
},{
  src: 'command/04.jpg',
  text: '镜头前的绿色'
}];

// 模块标题数据
var titleData = {
  title: '夏日里的一片温馨',
  tips: '暖暖的温情带给人们家的感受'
};

ViewCommand({
  cd: 'display',
  param: ['title', titleData, 'title']
});

ViewCommand({
  cd: 'create',
  param: [{
    src: 'command/01.jpg',
    text: '迎着朝阳的野菊花'
  }, 'product']
});

ViewCommand({
  cd: 'display',
  param: ['product', productData, 'product']
});


/*
 * 测试HTML
 *
 * <div id="title"></div>
 * <div id="product"></div>
 */
