# use strict有什么用？
> 按照一定的规则去除javascript一些容易让人混淆的语法
# ES6声明变量的方式？
> let 关键字let与var关键字不同在于let为块作用域 <br>
> const 常量不可修改<br>
> var 第一变量提升（对变量的定义会默认提前至函数开始处）,第二变量没有块作用域只有函数作用域 <br>
```
(function scope() {
    var i = 10;
    (function innerscope() {
        console.log(i);
        var i = 10;
    })();
})();
=====
undefined
-------------------------------
(function scope() {
    if(true){
        var i =10;
    }
    console.log(i);
})();
=====
10
```
# [Node.js的Path 模块](http://www.runoob.com/nodejs/nodejs-path-module.html)
# export 和 export default
###### 首先我们讲这两个导出，下面我们讲讲它们的区别
* export与export default均可用于导出常量、函数、文件、模块等
* 在一个文件或模块中，export、import可以有多个，export default仅有一个
* 通过export方式导出，在导入时要加{ }，export default则不需要
* export能直接导出变量表达式，export default不行。
# CommonJS规范规定
* 每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。
```
example.js
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
----------------------------
var example = require('./example.js');
console.log(example.x); // 5
console.log(example.addX(1)); // 6
----------------------------
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports = {
	x,
	addX
}
----------------------------
const  a = require('./a.js') ;
console.log(a.x);
console.log(a.addX(1));
```
# exports 与 module.exports
* 为了方便，Node为每个模块提供一个exports变量，指向module.exports。这等同在每个模块头部，有一行这样的命令。
> var exports = module.exports;
* 于是我们可以直接在 exports 对象上添加方法，表示对外输出的接口，如同在module.exports上添加一样。注意，不能直接将exports变量指向一个值，因为这样等于切断了exports与module.exports的联系
# ES6模块规范
* 不同于CommonJS，ES6使用 export 和 import 来导出、导入模块。
```
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export {firstName, lastName, year};
```
* 需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
```
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};
```
# export default 命令
* 使用export default命令，为模块指定默认输出。
```
// export-default.js
export default function () {
  console.log('foo');
}
```
# vue-cli es6转es5 保证浏览器兼容性
