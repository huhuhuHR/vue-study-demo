import Vue from 'vue'
import Router from 'vue-router'
import {firstPage, jsonTree, windowsKillProcess,echars} from '../pagers/index'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'router-link-active',
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: firstPage
    },
    {
      path: '/json',
      name: 'jsonTree',
      component: jsonTree
    },
    {
      path: '/windowsKillProcess',
      name: 'windowsKillProcess',
      component: windowsKillProcess
    },
    {
      path: '/echars',
      name: 'echars',
      component: echars
    }
  ]
})
