/*

观察者模式（Observer）：
又叫发布-订阅者模式（Publish/Subscribe）或消息机制，
它定义了一种一对多的关系，让多个观察者对象同时监听某一个主体对象，
这个主体对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。

 */


// 背景：评论+消息通知

/*
 * 观察者模式
 *
 * 将观察者放在闭包中，当页面加载就立即执行
 */
var Observer = (function() {
  // 防止消息队列暴漏而被篡改，故将消息容器作为静态私有变量保存。
  var __message = {};

  return {
    // 订阅
    subscribe: function(type, fn) {
      // 如果消息不存在则创建一个消息类型
      if (!__message[type]) {
        __message[type] = [fn];
      } else {
        // 将动作方法推送到消息对应的动作执行序列中
        __message[type].push(fn);
      }
    },

    // 取消订阅
    unsubscribe: function(type, fn) {
      if (!__message[type] || Object.prototype.toString.call(__message[type]) !== '[object Array]') return;

      for (var i = __message[type].length - 1; i >= 0; i--) {
        __message[type][i] === fn && __message[type].splice(i, 1);
      };
    },

    // 发布信息
    publish: function(type, args) {
      if (!__message[type]) return;

      // 定义消息信息
      var events = {
        type: type,
        args: args
      };

      // 执行注册的消息所对应的所有动作序列
      for (var i = 0; i < __message[type].length; i++) {
        __message[type][i].call(this, events);
      }
    }
  }
})();


/*
 * 拉出来溜溜
 */

// 订阅
Observer.subscribe('test', function(e) {
  console.log(e);
});

// 发布
Observer.publish('test', {msg: '传递参数'});






/*
 * 观察者模式
 *
 * 将观察者放在闭包中，当页面加载就立即执行
 */
var Observer = (function() {
  // 防止消息队列暴漏而被篡改，故将消息容器作为静态私有变量保存。
  var __message = {};

  return {
    // 注册信息接口（订阅）
    subscribe: function(type, fn) {
      // 如果消息不存在则创建一个消息类型
      if (!__message[type]) {
        __message[type] = [fn];
      } else {
        // 将动作方法推送到消息对应的动作执行序列中
        __message[type].push(fn);
      }
    },

    // 发布消息接口（取消订阅）
    unsubscribe: function(type, fn) {
      if (!__message[type] || Object.prototype.toString.call(__message[type]) !== '[object Array]') return;

      for (var i = __message[type].length - 1; i >= 0; i--) {
        __message[type][i] === fn && __message[type].splice(i, 1);
      };
    },

    // 移除信息接口（移除信息接口）
    publish: function(type, args) {
      if (!__message[type]) return;

      // 定义消息信息
      var events = {
        type: type,
        args: args
      };

      // 执行注册的消息所对应的所有动作序列
      for (var i = 0; i < __message[type].length; i++) {
        __message[type][i].call(this, events);
      }
    }
  }
})();

// 外观模式
function $(id) {
  return document.getElementById(id);
}

// 工程师A
(function() {

  // 新增一条消息
  function addMsgItem(e) {
    var text = e.args.text;
    var ul = $('msg');
    var li = document.createElement('li');
    var span = document.createElement('span');

    li.innerHTML = text;

    // 关闭按钮
    span.onclick = function() {
      ul.removeChild(li);

      Observer.publish('removeCommentMessage', {
        num: -1
      });
    };

    ul.appendChild(span);
    ul.appendChild(li);
  }

  Observer.subscribe('addCommentMessage', addMsgItem);
})();

// 工程师B
(function() {
  
  // 修改用户消息数目
  function changeMsgNum(e) {
    var num = e.args.num;
    $('msg_num').innerHTML = parseInt($('msg_num').innerHTML || 0) + 1;
  }

  // 注册添加评论信息
  Observer.subscribe('addCommentMessage', changeMsgNum);
  Observer.subscribe('removeCommentMessage', changeMsgNum);

})();


// 工程师C
(function() {
  
  // 用户点击提交按钮
  $('user_submit').onclick = function() {
    var text = $('user_input');
    
    if (!text.value) return;

    Observer.publish('addCommentMessage', {
      text: text.value,
      num: 1
    });

    text.value = '';
  };

})();

/*
 * 测试HTML
 *
 *  <div id="msg"></div>
 *  <input type="text" id="user_input" />
 *  <button id="user_submit">submite</button>
 *  <div id="msg_num"></div>
 */












'use strict';

/*
 * 观察者模式
 *
 * 将观察者放在闭包中，当页面加载就立即执行
 */
var Observer = (function() {
  // 防止消息队列暴漏而被篡改，故将消息容器作为静态私有变量保存。
  var __message = {};

  return {
    // 注册信息接口（订阅）
    subscribe: function(type, fn) {
      // 如果消息不存在则创建一个消息类型
      if (!__message[type]) {
        __message[type] = [fn];
      } else {
        // 将动作方法推送到消息对应的动作执行序列中
        __message[type].push(fn);
      }
    },

    // 发布消息接口（取消订阅）
    unsubscribe: function(type, fn) {
      if (!__message[type] || Object.prototype.toString.call(__message[type]) !== '[object Array]') return;

      for (var i = __message[type].length - 1; i >= 0; i--) {
        __message[type][i] === fn && __message[type].splice(i, 1);
      };
    },

    // 移除信息接口（移除信息接口）
    publish: function(type, args) {
      if (!__message[type]) return;

      // 定义消息信息
      var events = {
        type: type,
        args: args
      };

      // 执行注册的消息所对应的所有动作序列
      for (var i = 0; i < __message[type].length; i++) {
        __message[type][i].call(this, events);
      }
    }
  }
})();


// 学生类
var Student = function(result) {
  var self = this;

  // 学生回答结果
  self.result = result;

  // 学生回答问题动作
  self.say = function() {
    console.log(self.result);
  };
};

// 回答问题方法
Student.prototype.answer = function(question) {
  // 注册参数问题
  Observer.subscribe(question, this.say);
};

Student.prototype.sleep = function(question) {
  Observer.unsubscribe(question, this.say);
};


// 教师类
var Teacher = function() {};
Teacher.prototype.ask = function(question) {
  console.log('问题是：' + question);
  // 发布提问消息
  Observer.publish(question);
};


// 模拟听课的学生
var student1 = new Student('学生1回答问题');
var student2 = new Student('学生2回答问题');
var student3 = new Student('学生3回答问题');

// 注册一下哪位学生回答什么问题
student1.answer('什么是设计模式');
student1.answer('简述观察者模式');
student2.answer('什么是设计模式');
student3.answer('什么是设计模式');
student3.answer('简述观察者模式');

// 后来第三位同学睡着了。。
student3.sleep('简述观察者模式');


var teacher = new Teacher();

// 提问
teacher.ask('什么是设计模式');
teacher.ask('简述观察者模式');

// 最后，两个问题，第一个问题三名同学回答，第二个问题只有第一名同学回答。。。







































