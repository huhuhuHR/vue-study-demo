<template>
  <el-container id="app">
    <opeartion-dialog></opeartion-dialog>
    <load-layer></load-layer>
    <el-aside width="200px">
      <NavMenu/>
    </el-aside>
    <el-main class="app-main">
      <div class="container">
        <router-view/>
      </div>
    </el-main>
  </el-container>
</template>
<script>
  import {loadLayer, opeartionDialog} from './components/index'
  import NavMenu from "./components/menu/NavMenu"

  export default {
    name: 'App',
    components: {
      loadLayer,
      opeartionDialog,
      NavMenu
    },
    data() {
      return {}
    },
    mounted() {
    }
  }
</script>

<style>

  @import "./assets/icon/iconfont.css";

  * {
    margin: 0 auto;
    padding: 0 auto;
  }

  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  .container {
    height: 100%;
  }

  #app {
    height: 100%;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    line-height: 40px;
  }

  a {
    text-decoration: none;
  }

  .el-aside {
    display: block;
    position: absolute;
    left: 0;
    max-height: 800px;
    overflow-y: scroll;
  }

  .app-main {
    margin-left: 200px;
    padding: 0;
  }
</style>
