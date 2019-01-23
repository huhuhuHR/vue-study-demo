import Vue from 'vue'
import Router from 'vue-router'
import {firstPage, jsonTree} from '../pagers/index'

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
    }
  ]
})
