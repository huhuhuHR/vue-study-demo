# vue2.0环境构建
> vue -V <br>
> 2.9.6 <br>
> node -v <br>
> v8.1.2 <br>
> npm -v <br>
> 6.4.1 <br>

##### package.json
```
  "dependencies": {
    "axios": "^0.18.0 ",
    "element-ui": "^2.4.11",
    "url-search-params": "^1.1.0",
    "vue": "^2.5.2",
    "vue-router": "^3.0.1",
    "vuex": "^3.0.1",
    "vuex-router-sync": "^3.0.0"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^7.1.1",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0",
    "less-loader": "^4.1.0",
    "less": "^3.9.0"
  }
```
###### 备注：devDependencies是vue-cli构建工程和打包要用到的依赖，其中less，less-loader由我后来加上，目的是可以写嵌套式样的css。我们通常开发时候用到的依赖一般添加到dependencies中。
##### mac下面安装brew
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew search xxx
brew install xxx
brew remove xxx
```
#####安装node
```
brew install node
brew search node brew unlink node brew install homebrew/versions/node010
```
##### 安装npm
```
npm install -g npm
npm -g install npm@2.9.6
```
##### 升级node和npm
* 第一步，先查看本机node.js版本：node -v
* 第二步，清除node.js的cache：sudo npm cache clean -f
* 第三步，安装 n 工具，这个工具是专门用来管理node.js版本的，别怀疑这个工具的名字，是他是他就是他，他的名字就是 "n" sudo npm install -g n
* 第四步，安装最新版本的node.js sudo n stable
* 第五步，再次查看本机的node.js版本：node -v
* 第六步，更新npm到最新版：sudo npm install npm@latest -g
* 第七步，验证 node -v npm -v

##### npm配置
* 配置镜像路径 npm config set registry https://registry.npm.taobao.org
* 直接使用镜像路径安装 npm install -g cnpm --registry=https://registry.npm.taobao.org

###### 安装vue-cli
```
npm install -g vue-cli
```
###### vue-cli构建一个vue-study-demo
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
* 在项目中，右击package.json选择show npm scripts,显示npm后，双击命令即可,
    
##### 跨域问题
* 生成环境跨域，npm run build 打包后就是静态文件，Nginx配置代理只想index.html，配置静态路径，页面发送的请求要通过Nginx做代理配置。
* 本地快发环境配置代理相关问题总结
    * [本地开发代理配置路径](https://github.com/huhuhuHR/vue-study-demo/blob/master/config/index.js)
```
proxyTable: {
  '/test': {
    target: 'http://localhost:7099', // 接口域名
    changeOrigin: true, //是否跨域
    pathRewrite: {
      '^/test': '/test' //需要rewrite重写的.需要项目名字就加，不需要就不加，对于springboot的server.servlet.path
    }
  }
```

##### 自己封装axios
* [配置config](https://github.com/huhuhuHR/vue-study-demo/blob/master/src/http/ajaxConfig.js)
* [启动axios配置](https://github.com/huhuhuHR/vue-study-demo/blob/master/src/main.js)
```js
import Vue from 'vue'
import config from './http/ajaxConfig'
// 初始axios基本参数
config.ajaxConfig(Vue)
```
* http请求详解

###### 函数ajax详情
| 参数 | 描述 |
| :------:| :------: |
| url | 请求地址 | 
| method | 请求类型GET/POST | 
| params | 入参 | 
| emulateJSON | true:后台要要用@RequestParams去接. false:要用@ReqeustBody去接 | 
| useLoadLayer | true:有请求时候的蒙层 | 
| onUploadProgress | 进度条相关 | 
| successCallback | 成功回调函数 | 
| errorCallback | 失败回调函数 | 
```js
import http from '../http/http'
let url = '/test/v1/t13'
let params = {
  name: 'huorong'
}
http.ajax({
  url: url,
  method: 'GET',
  params: params,
  emulateJSON: true,
  useLoadLayer: true,
  successCallback: function (data) {
    this.response = data
  }.bind(this),
  errorCallback: function (data) {
    this.response = data
  }.bind(this)
})
```
```java
@RequestMapping(value = "t13",method = RequestMethod.GET)
public Result t13(@RequestParam String name) {
    Map<String, String> map = new HashMap<>();
    map.put("name", name);
    return Result.build("0", "aaa", map);
}
```
###### 注意：GET对应RequestMethod.GET对应url后面拼参数，POST对应RequestMethod.POST。emulateJSON是true对应@RequestParams对应表单，是false对应@RequestBody对应json

###### 函数ajaxUpload详情
| 参数 | 描述 |
| :------:| :------: |
| url | 请求地址 | 
| method | 默认POST | 
| params | FormData对象 | 
| useLoadLayer | true:有请求时候的蒙层 | 
| successCallback | 成功回调函数 | 
| errorCallback | 失败回调函数 | 
```js
import http from '../http/http'
let form = new FormData();
let fileExel = this.$el.getElementsByClassName('input1')[0].files[0];
form.append('fileExel', fileExel);
http.ajaxUpload({
  url: '',
  params: form,
  successCallback: function (data) {
  }.bind(this),
  errorCallback: function (data) {
  }.bind(this)
})
```
```java
@RequestMapping(value = "uploadExcel", method = RequestMethod.POST)
  public Result upload(@RequestParam("fileExel") MultipartFile fileExel) {}
```
###### 注意：默认表单形式POST方式提交文件
