<template>
  <div id="app">
    <opeartion-dialog></opeartion-dialog>
    <load-layer></load-layer>
    <el-container>
      <el-aside width="200px">
        <simple-menu/>
      </el-aside>
      <el-main>
        <div class="container">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  import {loadLayer, opeartionDialog} from './components/index'
  import SimpleMenu from "./components/menu/Menu"

  export default {
    name: 'App',
    components: {
      loadLayer,
      opeartionDialog,
      SimpleMenu
    },
    data() {
      return {
        // routes: this.$router.options.routes
      }
    },
    mounted() {
      // console.log(this.routes)
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

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 40px;
  }

  a {
    text-decoration: none;
  }

</style>
