# vue2.0环境构建
> vue -V <br>
> 2.9.6 <br>
> node -v <br>
> v8.1.2 <br>
> npm -v <br>
> 6.4.1 <br>

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
    npm -g install npm@2.9.6

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
    npm install -g vue-cli

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
* 在项目中，右击package.json选择show npm scripts,显示npm后，双击命令即可
###### vue 全家桶
    "vue": "^2.5.2",
    "vue-router": "^3.0.1",
    "vuex": "^3.0.1",
###### 自己封装axios
* 配置config
* 集成api
```
http.api({
  url: '',
  params: {
  },
  emulateJSON: true,
  useLoadLayer: true,
  successCallback: function (data) {
  }.bind(this),
  errorCallback: function (data) {
  }.bind(this)
})
@RequestMapping("getLoginInfo")
  public Result getLoginInfo(@RequestParam Map params) {}

uploadExcel () {
  var form = new FormData();
  let fileExel = this.$el.getElementsByClassName('input1')[0].files[0];
  console.log(fileExel);
  form.append('fileExel', fileExel);
  this.$http.uploadApi({
    url: this.HOST + '/excel/uploadJedis',
    params: form,
    successCallback: function (data) {
    }.bind(this),
    errorCallback: function (data) {
    }.bind(this)
  });
}
@RequestMapping(value = "uploadExcel", method = RequestMethod.POST)
  public Result upload(@RequestParam("fileExel") MultipartFile fileExel) {}
