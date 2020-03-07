import Vue from 'vue'
import Router from 'vue-router'
import {routes} from "../constant"

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'router-link-active',
  routes: routes
})
