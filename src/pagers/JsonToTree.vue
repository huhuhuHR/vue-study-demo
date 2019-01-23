<template>
  <div>
    <div>
      <div>
        <textarea rows="5" cols="50" v-model="json" class="comments"></textarea>
      </div>
      <button @click="anlayse()">确认</button>
    </div>
    <div>
      <button @click="selectAll()">全选</button>
      <button @click="noSelectAll()">全不选</button>
    </div>
    <div class="flex">
      <div class="left">
        <div v-for="(data,index) in leftTree" class="text-left">
          <span v-show="data.state" @click="switchChose(index)"><i class="iconfont icon-choice"></i></span>
          <span v-show="!data.state" @click="switchChose(index)"><i class="iconfont icon-unchoice"></i></span>
          {{data.id}}
          <span @click="deleteForTree(index)"><i class="iconfont icon-shanchu"></i></span>
        </div>
      </div>
      <div class="right">
        <div v-for="(data,index) in rightTree" class="text-left">
          <span><i class="iconfont icon-choice"></i></span>
          {{data}}
          <span @click="deleteFromRight(index)"><i class="iconfont icon-shanchu"></i></span>
        </div>
      </div>
    </div>
    <div>
      <button @click="save()">保存</button>
    </div>
  </div>
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

<style scoped>
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left {
    width: 40%;
    border: 1px solid;
    height: 400px;
    overflow-y: scroll;
    float: left;
  }

  .right {
    width: 40%;
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
