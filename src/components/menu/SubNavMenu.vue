<template>
  <div>
    <el-submenu :index="item.path" v-if="item.children && item.children.length>0">
      <template slot="title">
        <i class="icon iconfont" :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </template>
      <template v-for="(routePath,index) in item.children">
        <menuItem :item="routePath" :key="index" v-if="routePath.children && routePath.children.length>0"></menuItem>
        <el-menu-item v-else :index="item.path+'/'+routePath.path" :key="index">
          <i class="icon iconfont" :class="routePath.icon"></i>
          <span slot="title">{{routePath.name}}</span>
        </el-menu-item>
      </template>
    </el-submenu>
    <el-menu-item v-else :index="item.path">
      <i class="icon iconfont" :class="item.icon"></i>
      <span slot="title">{{item.name}}</span>
    </el-menu-item>
  </div>
</template>

<script>
  export default {
    name: "SubNavMenu",
    props: {
      item: { // route object
        type: Object,
        required: true
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
</style>
