// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 路由
import router from './router'
// ajax
import config from './http/ajaxConfig'
// vuex状态管理
import store from './store'
// 主要是把 vue-router 的狀態放進 vuex 的 state 中
import {sync} from 'vuex-router-sync'
// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
// 初始axios基本参数
config.ajaxConfig(Vue)

Vue.config.productionTip = false
// 主要是把 vue-router 的狀態放進 vuex 的 state 中，
// 這樣就可以透過改變 state 來進行路由的一些操作，
// 當然直接使用像是 $route.go,$router.push(),$router.push({ query: {...}})
// 之類的也會影響到 state ，
// 會同步的是這幾個屬性
// vuex-router-sync
// How does it work?
// It adds a route module into the store, which contains the state representing the current route:
// store.state.route.path   // current path (string)
// store.state.route.params // current params (object)
// store.state.route.query  // current query (object)
// When the router navigates(导航) to a new route, the store's state is updated.
// store.state.route is immutable（不可变的）, because it is derived state from the URL（因为它从url中派生出状态）,
// which is the source of truth. You should not attempt to trigger navigations（改变导航） by mutating（变异） the route object.
// Instead, just call $router.push() or $router.go(). Note（请注意） that you can do $router.push({ query: {...}}) to
// update the query string on the current path.
sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
