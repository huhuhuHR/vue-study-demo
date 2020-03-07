<template>
  <el-menu
    class="el-menu-demo"
    :default-active="$route.path" router
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <SubNavMenu v-for="(item,index) in routes" v-if="item.show" :item="item" :key="index"></SubNavMenu>
  </el-menu>
</template>

<script>
  import SubNavMenu from './SubNavMenu'
  import {routes} from '../../constant'

  export default {
    name: "NavMenu",
    components: {SubNavMenu},
    computed: {
      routes() {
        return routes
      }
    }
  }
</script>

<style scoped>

</style>
