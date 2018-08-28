# webpack打包优化解决方案
> 单页应用首次进入项目会获取一部分数据，之后将JS包分片，走到那块再去加载那块的JS。
> 这样跨页面重复的JS，CSS不必再去获取，跨页面就不会出现进度条。这样减少了等待时间，提升了用户体验，省去了不必要的流量。
> 但是单页应用也有一个显著的问题：首次进入的时候，加载的资源太多，白屏时间太长。
### 这里介绍一些常用的webpack打包优化解决方案
* 使用插件查看项目所有包及体积大小
* webpack外部扩展
* DLL方式
### 查看项目打包1
> webpack有个插件，可以查看项目一共打了多少包，每个包的体积，每个包里面的包情况。<br>
> 首先下载插件
```
npm intall webpack-bundle-analyzer --save-dev
```
> vue-cli已有配置 build/webpack.prod.conf.js
```
if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
```
在package.json中添加命令
```
vue-study-demo/config/index.js
config.build.bundleAnalyzerReport: process.env.npm_config_report
"script": {
    "analyz": "NODE_ENV=production npm_config_report=true npm run build"
}
```
> 然后命令行输入
```
npm run analyz
```
![](./static/1.png)
### webpack外部扩展
> 列出了项目中较大的包，剩下的事情就是想办法如何减小这些包的体积（将一个大包拆成多个小包）。<br>
> 项目中产生较大的包的原因可以从两个方面去考虑：<br>
* 项目中引入的依赖包过于庞大；
* 业务代码集中在一块写，或者是业务代码写的比较繁琐；
> 对于这两个问题，我们可以从两个方面着手解决：<br>
* 抽离项目中公共依赖的、不常变动的、体积较大的包；
* 将一个较大的业务代码文件，拆成多个较小的文件，异步加载（或者优化业务代码）。这里面第二项涉及到改动业务代码，具体的情况就不同了，适合查看 如何优化JS代码。
> 我们来讨论第一种方法，在不改动业务代码的情况下，如何减小公共依赖。<br>
> 要知道这些依赖是我们需要的，不可能排除不引入。<br>
> 但是他们都是全局依赖的，万年不变的，可以使用浏览器自己的缓存来实现不重复加载。<br>
> 具体做法就是：
* 将项目中需要的一些公共依赖包，并且不常变动的，单独取出，不再每次都打包编译（如React，Redux等）。
* 而是通过使用script标签形式cdn引入，这样在有缓存的情况下，这些资源均走缓存，不必加载。
> 总结需要抽离的公共依赖<br>
> 这些依赖需要满足一定的条件：<br>
* 体积较大；
* 不常更新；
* 依赖较多；
* 是前置依赖；
```
  常见的满足这类条件的包有：
  react
  react-dom
  redux
  react-redux
  moment
  jquery
```
> 另外一些包文件如 Antd库文件，整个包较大，但是每次用什么取什么的话，库文件也会按需加载，不必单独取出。<br>
> 还有这类库文件不建议单独取出，因为里面可能会有bug，需要更新。<br>
> 使用CDN引入资源<br>
> 以我的demo为例：我需要抽离出的文件有 react，react-dom，react-router，redux，react-redux，history。<br>
> 将这些文件放到cnd上，注意，这些文件要是压缩版本，并且是用ES5编写的，否则浏览器报错。<br>
```
<head>
  <title>React Starter Kit</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 体积较大的包 -->
  <script src="https://cdn.bootcss.com/react/15.0.0/react-with-addons.min.js"></script>
  <script src="https://cdn.bootcss.com/react/15.0.0/react-dom.min.js"></script>
  <script src="https://cdn.bootcss.com/react-router/3.0.0/ReactRouter.min.js"></script>
  <script src="https://cdn.bootcss.com/redux/3.6.0/redux.min.js"></script>
  <script src="https://cdn.bootcss.com/react-redux/5.0.1/react-redux.min.js"></script>
  <script src="https://cdn.bootcss.com/history/4.5.0/history.min.js"></script>
</head>
```
> DLL方式
```
dll 全称是：dynamic link library（动态链接库）
dll方式也就是通过配置，告诉webpack指定库在项目中的位置，从而直接引入，不将其打包在内。
上面介绍的方式是将包放到cdn上，build的时候不在引入对应的包；
dll方式就是指定包在项目中，build的时候不在打包对应的包，使用的时候引入。
webpack通过webpack.DllPlugin与webpack.DllReferencePlugin两个内嵌插件实现此功能。

新建webpack.dll.config.js
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: [
            'react',
            'react-dom',
            //其他库
            ],
    },
    output: {
        path: './build',
        filename: '[name].js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: './build/bundle.manifest.json',
            name: '[name]_library',
        })
    ]
};
webpack.DllPlugin选项：

path：manifest.json文件的输出路径，这个文件会用于后续的业务代码打包；
name：dll暴露的对象名，要跟output.library保持一致;
context：解析包路径的上下文，这个要跟接下来配置的 webpack.config.js 一致。
运行文件
运行：webpack --config webpack.dll.config.js

生成两个文件，一个是打包好的bundlejs，另外一个是bundle.mainifest.json，大致内容如下：

{
  "name": "bundle_library",
  "content": {
    "./node_modules/react/react.js": 1,
    "./node_modules/react/lib/React.js": 2,
    "./node_modules/process/browser.js": 3,
    "./node_modules/object-assign/index.js": 4,
    "./node_modules/react/lib/ReactChildren.js": 5,
    "./node_modules/react/lib/PooledClass.js": 6,
    "./node_modules/react/lib/reactProdInvariant.js": 7,
    //其他引用
}
配置webpack.config.js
const webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: {
    main: './main.js',
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: './',
    filename: '[name].js'
  },
  module: {
    loaders:[
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
        include: path.join(__dirname, '.')
      }
    ]
  },
  plugins: [
     new webpack.DllReferencePlugin({
      context: '.',
      manifest: require("./build/bundle.manifest.json"),
        }),
  ]
};
webpack.DllReferencePlugin的选项中：

context：需要跟之前保持一致，这个用来指导webpack匹配manifest.json中库的路径；
manifest：用来引入刚才输出的manifest.json文件。
```
[参考文章-webpack打包优化解决方案](https://segmentfault.com/a/1190000011138081)
### 查看项目打包2
> 在webpack.config.js配置插件
```
//引入模块
const Jarvis = require("webpack-jarvis");

/* the rest of your webpack configs */
//添加插件，指定监听端口是1337
plugins: [
  new Jarvis({
    port: 1337 // optional: set a port
  })
];
npm run dev
```
![](./static/2.jpeg)
