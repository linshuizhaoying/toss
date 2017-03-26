/*
外观模式：
为一组复杂的子系统接口提供了一个更高级的统一接口，通过这个接口对子系统接口的访问更容易。

常见是兼容事件的封装。


 */

// 外观模式实现
function addEvent(dom, type, fn) {

  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn);
  } else {
    dom['on' + type] = fn;
  }
}

var myInput = document.getElementById('myinput');

addEvent(myInput, 'click', function() {
  console.log('绑定第一个事件');
});

addEvent(myInput, 'click', function() {
  console.log('绑定第二个事件');
});