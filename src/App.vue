<template>
  <el-container id="app">
    <router-view></router-view>
    <opeartion-dialog></opeartion-dialog>
    <load-layer></load-layer>
  </el-container>
</template>
<script>
  import {loadLayer, opeartionDialog} from './components/index'

  export default {
    name: 'App',
    components: {
      loadLayer,
      opeartionDialog
    },
    data() {
      return {};
    }
  }
</script>

<style>

  @import "./assets/icon/iconfont.css";

  * {
    margin: 0 auto;
    padding: 0 auto;
  }

  html {
    background-color: #b2bac2;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #eff3f6;
  }
</style>
