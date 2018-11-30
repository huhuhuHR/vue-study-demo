<template>
  <div class="operation-dialog" v-show="operationInfo.flag">
    <MaskLayer></MaskLayer>
    <div class="operation">
      <div class="head">
        <span>操作提示</span>
      </div>
      <div class="iconfont"><i :class="operationInfo.iconfont"></i></div>
      <div class="text">{{operationInfo.text}}</div>
    </div>
  </div>
</template>
<script>
  import MaskLayer from './MaskLayer.vue'
  import {OPERATION_RESULT_HIDDEN} from '../../store/mutation-types'

  export default {
    data () {
      return {}
    },
    created () {
    },
    computed: {
      operationInfo () {
        return this.$store.getters.operationInfo
      }
    },
    methods: {
      hiddenShow () {
        this.$store.commit('OPERATION_RESULT_HIDDEN')
      }
    },
    components: {
      MaskLayer
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .operation-dialog {
    .operation {
      position: fixed;
      height: 200px;
      width: 300px;
      border-radius: 5px;
      background-color: white;
      z-index: 10001;
      top: 50%;
      left: 50%;
      margin-top: -100px;
      margin-left: -150px;
      .head {
        border-radius: 5px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        background-color: #f3f4f8;
        span {
          margin-left: 5px;
        }
      }
      .iconfont {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        .icon-chenggong {
          color: #8ec31e;
          font-size: 50px;
        }
        .icon-shibai {
          color: red;
          font-size: 50px;
        }
      }
      .text {
        font-size: 24px;
        text-align: center;
      }
    }
  }
</style>
