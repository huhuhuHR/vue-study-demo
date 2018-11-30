<template>
  <div id="app">
    <router-view/>
    <opeartion-dialog></opeartion-dialog>
    <load-layer></load-layer>
  </div>
</template>

<script>
  import {loadLayer, opeartionDialog} from './components/index'

  export default {
    name: 'App',
    components: {
      loadLayer,
      opeartionDialog
    }
  }
</script>

<style>
  @import "./assets/icon/iconfont.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
