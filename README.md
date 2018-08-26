# vue2.0环境构建

### 安装node,npm,vue-cli

###### mac下面安装brew
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    brew search xxx
    brew install xxx
    brew remove xxx

###### 安装node
    brew install node
    brew search node brew unlink node brew install homebrew/versions/node010

###### 安装npm
    npm install -g npm
    npm -g install npm@2.9.1

###### 安装vue-cli
    npm install -g vue-cli

###### vue-cli构建一个vuedemo
* cmd打开命令行窗口
* 输入npm install -g vue-cli，然后回车等待
* 安装结束后输入vue -V 如果显示版本号继续下一步操作
* vue init webpack 后面接上要创建的目录名回车
* 显示Project nanme 目录名 回车 project description 后面可以写上描述，或者直接回车，Author 后面可以写作者也可以回车
* Install vue-router? 选择Y
* User ESLint to lint your code? 选Y
* Setup unit tests with Karma + Mocha? 问的是否要测试 选n
* Setup e2e tests with Nightwatch? 选n
* 这个时候在你创建的目录下就有你的目录了，然后cd 你的目录名进去npm install回车等待
* 创建结束后在创建目录里面按住shift+右键 选择 在此处打开命令窗口 输入npm run dev启动应用，启动成功它会自动打开一个vue页面
* 每次这样启动是很麻烦的，用开发工具加载整个项目，里面有个package.json，它我整个项目的配置和信息的描述，里面有个scripts,这是定义的一些脚本，刚才用的就是里面的dev，它会执行后面的东西，就是用node跑一个JSON文件
* 在项目中，右击package.json选择show npm scripts,显示npm后，双击命令即可

### 关于vue里边用到的CommonJS(module.exports,require)，Es6(export,import)
###### [CommonJS规范](http://javascript.ruanyifeng.com/nodejs/module.html)
###### [ES6 Module 的语法](http://es6.ruanyifeng.com/#docs/module)

### JavaScript 严格模式(use strict)
###### [use strict](http://www.runoob.com/js/js-strict.html)

