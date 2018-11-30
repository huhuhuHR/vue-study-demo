<template>
  <div>
    <div>
      {{name}}
    </div>
    <div>
      <button @click="doOperation()">弹框</button>
    </div>
  </div>
</template>

<script>
  import {OPERATION_RESULT_SHOW, OPERATION_RESULT_HIDDEN} from '../store/mutation-types'

  export default {
    data () {
      return {
        name: 'firstPage'
      }
    },
    methods: {
      doOperation () {
        this.$store.commit('OPERATION_RESULT_SHOW',
          {
            'iconfont': 'icon-chenggong',
            'text': '成功'
          })
        // setTimeout(function () {
        //   this.$store.commit('OPERATION_RESULT_HIDDEN')
        // }.bind(this), 1500)
      }
    },
//    在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
    beforeCreate: function () {
      console.group('beforeCreate 创建前状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el) //undefined
      console.log('%c%s', 'color:red', 'data   : ' + this.$data) //undefined
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
// 实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。
// 然而，挂载阶段还没开始，$el 属性目前不可见
// 因此假如有某些数据必须获取才允许进入页面的话，并不适合在这个页面发请求。
//  建议在组件路由勾子beforeRouteEnter中来完成
    created: function () {
      console.group('created 创建完毕状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el) //undefined
      console.log('%c%s', 'color:red', 'data   : ' + this.$data) //已被初始化
      console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
      //nextTick方法的回调会在dom更新后再执行，因此可以和一些dom操作搭配一起用，如 ref。
      //非常好用，可以解决很多疑难杂症。nextTick越早注册的nextTick触发越早
      this.$nextTick(() => {
        console.log('nextTick')  //回调里的函数一直到真实的dom渲染结束后，才执行
      })
      console.log('组件：created')
    },
//    在挂载开始之前被调用：相关的 render 函数首次被调用。
    beforeMount: function () {
      console.group('beforeMount 挂载前状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + (this.$el)) //已被初始化
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data) //已被初始化
      console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
    },
//  1.在这个周期内，对data的改变可以生效。但是要进下一轮的dom更新，dom上的数据才会更新。
//  2.这个周期可以获取 dom。
//  3.beforeRouteEnter的next的勾子比mounted触发还要靠后
//  4.指令的生效在mounted周期之前
    mounted: function () {
      console.group('mounted 挂载结束状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el) //已被初始化
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data) //已被初始化
      console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
    },
// 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，
// 这不会触发附加的重渲染过程。
    beforeUpdate: function () {
      console.group('beforeUpdate 更新前状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data)
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
// 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，
// 组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在
// 此期间更改状态，因为这可能会导致更新无限循环。
    updated: function () {
      console.group('updated 更新完成状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data)
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
    //    实例销毁之前调用。在这一步，实例仍然完全可用
    beforeDestroy: function () {
      console.group('beforeDestroy 销毁前状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data)
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
// Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
// 所有的事件监听器会被移除，所有的子实例也会被销毁。
    destroyed: function () {
      console.group('destroyed 销毁完成状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data)
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
    beforeRouteEnter (to, from, next) {
      console.log(this)  //undefined，不能用this来获取vue实例
      console.log('组件路由勾子：beforeRouteEnter')
// beforeRouteEnter的执行顺序是如此靠前，而其中next的回调勾子的函数，执行则非常靠后，在mounted之后！！
// 我们通常是在beforeRouteEnter中加载一些首屏用数据，待数据收到后，再调用next勾子，通过回调的参数vm将数据绑定到实例上。
// 因此，请注意next的勾子是非常靠后的。
      next(vm => {
        console.log(vm)  //vm为vue的实例
        console.log('组件路由勾子beforeRouteEnter的next')
      })
    },
//    在离开路由时调用。可以用this来访问组件实例。但是next中不能传回调。
    beforeRouteLeave (to, from, next) {
      console.log(this)    //可以访问vue实例
      console.log('组件路由勾子：beforeRouteLeave')
      next()
    }
  }
</script>

<style scoped>

</style>
