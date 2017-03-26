/*

模板方法（TemplateMethod）父类中定义一组操作算法骨架，
而将一些实现步骤延迟到子类中，
使得子类可以不改变一个算法的结构即可重定义该算法的某些实现步骤。

模板方法的核心在于对方法的重用。将核心方封装在基类中，让子类继承基类的方法，实现积累方法的共享。

 */


'use strict';

// 先创建基础类，然后针对基础类做扩展

// 背景：提示框

/*
 * 模板类
 * 基础提示框
 *
 * @param data 渲染数据
 */
var Alert = function(data) {
  if (!data) return;

  // 设置内容
  this.content = data.content;

  // 创建提示框面板
  this.panel = document.createElement('div');
  // 创建提示内容组件
  this.contentNode = document.createElement('p');
  // 创建确认按钮组件
  this.confirmBtn = document.createElement('span');
  // 创建关闭按钮组件
  this.closeBtn = document.createElement('b');

  // 为提示框面板添加class
  this.panel.className = 'alert';
  // 为确认按钮添加class
  this.confirmBtn.className = 'a-confirm';
  // 为关闭按钮添加class
  this.closeBtn.className = 'a-close';

  // 为确认按钮添加文案
  this.confirmBtn.innerHTML = data.confirm || '确认';
  // 为提示内容添加文本
  this.contentNode.innerHTML = data.content || '';

  // 点击确认按钮执行方法 如果 data 中有 success 方法则为 success 方法，否则为空函数
  this.success = data.success || function() {};
  // 点击关闭按钮执行方法
  this.fail = data.fail || function() {};
};

// 提示框原型方法
Alert.prototype = {

  // 创建方法
  init: function() {
    // 生成提示框
    this.panel.appendChild(this.closeBtn);
    this.panel.appendChild(this.confirmBtn);
    this.panel.appendChild(this.contentNode);

    // 插入页面中
    document.body.appendChild(this.panel);

    // 绑定事件
    this.bindEvent();

    // 显示提示框
    this.show();
  },

  // 绑定事件
  bindEvent: function() {
    var self = this;

    this.closeBtn.onclick = function() {
      // 执行取消方法
      self.fail();
      // 隐藏弹层
      self.hide();
    };

    this.confirmBtn.onclick = function() {
      // 执行确认方法
      self.success();

      // 隐藏弹层
      self.hide();
    };
  },

  // 隐藏弹窗方法
  hide: function() {
    this.panel.style.display = 'none';
  },

  // 显示弹层方法
  show: function() {
    this.panel.style.display = 'block';
  }
};





/* 
 * 右侧按钮提示框
 */
var RightAlert = function(data) {
  // 继承基本提示框构造函数
  Alert.call(this, data);

  // 为确认按钮添加 right class设置位置居右
  this.confirmBtn.className = this.confirmBtn.className + ' right';
};

// 继承基本提示框方法
RightAlert.prototype = new Alert();


/*
 * 标题提示框
 */
var TitleAlert = function(data) {
  // 继承基本提示框构造函数
  Alert.call(this, data);

  // 设置标题内容
  this.title = data.title;

  // 创建标题组件
  this.titleNode = document.createElement('h3');

  // 标题组件中写入标题内容
  this.titleNode.innerHTML = this.title;
};

// 继承原型
TitleAlert.prototype = new Alert();

// 对基本提示框创建方法扩展
TitleAlert.prototype.init = function() {
  // 插入标题
  this.panel.insertBefore(this.titleNode, this.panel.firstChild);

  // 继承基本提示框init方法
  Alert.prototype.init.call(this);
};

/***** 继承类也可作为模板类 *****/

/*
 * 带有取消按钮的弹出框
 */
var CancelAlert = function(data) {
  // 继承标题提示框构造函数
  TitleAlert.call(this, data);

  // 取消按钮文案
  this.cancel = data.cancel;

  // 创建取消按钮
  this.cancelBtn = document.createElement('span');

  // 添加class
  this.cancelBtn.className = 'cancel';

  // 设置内容
  this.cancelBtn.innerHTML = this.cancel || '取消';
};

// 继承标题提示框原型方法
CancelAlert.prototype = new Alert();

CancelAlert.prototype.init = function() {
  // 继承标题提示框创建方法
  TitleAlert.prototype.init.call(this);

  // 由于取消按钮要添加在末尾，所以在创建完其他组建后添加
  this.panel.appendChild(this.cancelBtn);
};

CancelAlert.prototype.bindEvent = function() {
  var self = this;

  TitleAlert.prototype.bindEvent.call(this);

  this.cancelBtn.onclick = function() {
    self.fail();
    self.hide();
  };
};



/*
 * 实例化提示框
 */
new CancelAlert({
  title: '标题提示',
  content: '提示内容',
  success: function() {
    console.log('ok');
  },
  fail: function() {
    console.log('cancel');
  }
}).init();

















function formateString(str, data) {
  return str.replace(/\{#(\w+)#\}/g, function(match, key) {
    return typeof data[key] === undefined ? '' : data[key];
  });
}

/*
 * 基础导航
 */
var Nav = function(data) {
  // 基础导航样式模板
  var item = '<a href="{#href#}" title="{#title#}">{#name#}</a>';

  // 创建字符串
  var html = '';

  // 格式化数据
  for (var i = 0; i < data.length; i++) {
    html += formateString(item, data[i]);
  }

  return html;
};


/*
 * 带有消息提醒信息导航
 */
var NumNav = function(data) {
  var tpl = '<b>{#num#}</b>';

  for (var i = 0; i < data.length; i++) {
    data[i].name += formateString(tpl, data[i]);
  }

  // 继承继承类，并返回字符串
  return Nav.call(this, data);
};


/*
 * 带有链接地址的导航
 */
var LinkNav = function(data) {
  var tpl = '<span>{#link#}</span>';

  for (var i = 0; i < data.length; i++) {
    data[i].name += formateString(tpl, data[i]);
  }

  return Nav.all(this, data);
};


// 获取导航容器
var nav = document.getElementById('content');

// 添加内容
nav.innerHTML = NumNav([{
  href: 'http://hao.360.cn',
  title: '360导航',
  name: '360',
  num: '10'
},{
  href: 'http://www.taobao.com',
  title: '淘宝商城',
  name: '淘宝',
  num: '2'
},{
  href: 'http://www.qq.com',
  title: '腾讯首页',
  name: '腾讯',
  num: '3'
}]);