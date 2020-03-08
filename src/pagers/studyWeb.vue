<template>
  <el-row :gutter="24">
    <el-col :span="5" v-for="(o, index) in webInfo" :key="o.id" :offset="(index % 4===0)? 2:0">
      <div class="grid-content bg-purple" @click="openUrl(o.url)">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <span>
              <i class="icon iconfont" :class="o.icon" style="font-size: 50px;" :style="{'color': o.color}"></i>
            </span>
            <div class="bottom clearfix">
              {{o.name}}
            </div>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import {webInfo} from "../constant/index"

  export default {
    name: "studyWeb",
    data() {
      return {
        currentDate: new Date()
      };
    },
    methods: {
      openUrl(url) {
        window.open(url, '_blank');
      }
    },
    computed: {
      webInfo() {
        return webInfo
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .el-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    cursor:pointer;
  }

  .el-col {
    border-radius: 4px;
    margin-top: 12px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
