<template>
  <div>
    <el-container>
      <el-input v-model="input" placeholder="请输入内容" @keyup.enter.native="onSubmit"></el-input>
    </el-container>
    <el-container>
      <div v-for="(index,pid) in pidSet ">
        {{index}}-{{pid}}
      </div>
    </el-container>
  </div>
</template>
<script>
  import http from '../http/http'

  export default {
    data() {
      return {
        input: '',
        pidSet: []
      }
    },
    methods: {
      onSubmit: function () {
        let url = '/test/process/getPidSet'
        let params = {
          port: this.input
        }
        http.ajax({
          url: url,
          method: 'POST',
          params: params,
          emulateJSON: true,
          useLoadLayer: true,
          successCallback: function (data) {
            console.log(data)
            this.pidSet = data
          }.bind(this),
          errorCallback: function (data) {
          }.bind(this)
        })
      }
    }
  }
</script>
<style scoped>
</style>
