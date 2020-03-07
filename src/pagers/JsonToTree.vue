<template>
  <el-main>
    <el-row>
      <textarea rows="5" cols="50" v-model="json" class="comments" placeholder="请输出json "/>
    </el-row>
    <el-row>
      <el-button type="primary" @click="anlayse()">确定</el-button>
      <el-button type="primary" @click="selectAll()">全选</el-button>
      <el-button type="primary" @click="noSelectAll()">全不选</el-button>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="left">
            <div v-for="(data,index) in leftTree" class="text-left">
              <span v-show="data.state" @click="switchChose(index)"><i class="iconfont icon-choice"></i></span>
              <span v-show="!data.state" @click="switchChose(index)"><i class="iconfont icon-unchoice"></i></span>
              {{data.id}}
              <span @click="deleteForTree(index)"><i class="iconfont icon-shanchu"></i></span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <div class="right">
            <div v-for="(data,index) in rightTree" class="text-left">
              <span><i class="iconfont icon-choice"></i></span>
              {{data}}
              <span @click="deleteFromRight(index)"><i class="iconfont icon-shanchu"></i></span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-button type="primary" @click="save()">保存</el-button>
    </el-row>
  </el-main>
</template>
<script>
  import {OPERATION_RESULT_SHOW, OPERATION_RESULT_HIDDEN} from '../store/mutation-types'

  export default {
    data() {
      return {
        json: '',
        leftTree: [],
        rightTree: []
      }
    },
    methods: {
      selectAll: function () {
        for (let i = 0; i < this.leftTree.length; i++) {
          this.leftTree[i].state = true;
        }
        this.synTree();
      },
      noSelectAll: function () {
        for (let i = 0; i < this.leftTree.length; i++) {
          this.leftTree[i].state = false;
        }
        this.synTree();
      },
      save: function () {
        if (this.onlyOne()) {
          this.$store.commit('OPERATION_RESULT_SHOW',
            {
              'iconfont': 'icon-kaishi',
              'text': '成功'

            })
          setTimeout(function () {
            this.$store.commit('OPERATION_RESULT_HIDDEN')
          }.bind(this), 1500)
        } else {
          this.$store.commit('OPERATION_RESULT_SHOW',
            {
              'iconfont': 'icon-kaishi',
              'text': '失败'
            })
          setTimeout(function () {
            this.$store.commit('OPERATION_RESULT_HIDDEN')
          }.bind(this), 1500)
        }
      },
      onlyOne: function () {
        for (let i = 0; i < this.rightTree.length; i++) {
          let item = this.rightTree[i]
          if (this.rightTree.indexOf(item) !== this.rightTree.lastIndexOf(item)) {
            return false
          }
        }
        return true
      }
      ,
      synTree: function () {
        this.rightTree = []
        for (let i = 0; i < this.leftTree.length; i++) {
          let o = this.leftTree[i]
          if (o.state) {
            this.rightTree.push(o.id)
          }
        }
      },
      anlayse: function () {
        this.leftTree = []
        let tmpStr = this.json.replace(/\'/g, "\"")
        console.log(tmpStr)
        let tmpJson = JSON.parse(tmpStr)
        for (let tmpJsonKey in tmpJson) {
          let o = {};
          o.state = false;
          o.id = tmpJsonKey
          this.leftTree.push(o)
        }
      },
      switchChose: function (index) {
        this.leftTree[index].state = !this.leftTree[index].state
        this.synTree()
      },
      deleteForTree: function (index) {
        this.leftTree.splice(index, 1)
        this.synTree()
      },
      deleteFromRight: function (index) {
        this.rightTree.splice(index, 1)
        this.leftTree[index].state = !this.leftTree[index].state
      }
    }
    ,
    watch: {}
    ,
    beforeCreate: function () {
    }
    ,
    created: function () {
    }
    ,
    beforeMount: function () {
    }
    ,
    mounted: function () {
    }
    ,
    beforeUpdate: function () {
    }
    ,
    updated: function () {
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
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

  .left {
    width: 100%;
    border: 1px solid;
    height: 400px;
    overflow-y: scroll;
    float: left;
  }

  .right {
    width: 100%;
    border: 1px solid;
    height: 400px;
    overflow-y: scroll;
    float: left;
  }

  .text-left {
    text-align: left;
    margin-left: 20%;
  }

  .comments {
    width: 100%;
    overflow: auto;
    word-break: break-all;
  }
</style>
