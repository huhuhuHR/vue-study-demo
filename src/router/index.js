import Vue from 'vue'
import Router from 'vue-router'
import {jsonTree, home} from '../pagers/index'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'router-link-active',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: home
    },
    {
      path: '/json',
      name: 'jsonTree',
      component: jsonTree
    }
  ]
})
