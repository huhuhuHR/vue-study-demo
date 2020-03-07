<template>
  <router-link :to="path">
    <div class="menu-item" :class="{ 'active': active }">{{ title }}</div>
  </router-link>
</template>

<script>
  export default {
    name: 'menu-item',
    props: {
      path: { // 唯一的routerPath
        type: String,
        required: true
      },
      title: { // 标题
        type: String,
        required: true
      }
    },
    data() {
      return {}
    },
    computed: {
      // 当前菜单是否激活
      active() {
        return this.$route.path === this.path
      }
    },
    methods: {},
    mounted() {
      // 如果父级存在 addChild 方法则将自己添加进去
      if (this.$parent.hasOwnProperty('addChild')) {
        this.$parent.addChild(this.path, this)
      }
    },
    destroyed() {
      // 如果父级存在 removeChild 方法则将自己从中移除
      if (this.$parent.hasOwnProperty('removeChild')) {
        this.$parent.removeChild(this.path)
      }
    }
  }
</script>

<style scoped>
  .menu-item {
    padding: 20px;
    color: rgb(153, 153, 153);
    user-select: none
  }

  .menu-item:hover {
    background: rgb(244, 244, 244);
  }

  .menu-item {
    padding: 20px;
    color: rgb(153, 153, 153);
    user-select: none
  }

  .menu-item:hover {
    background: rgb(244, 244, 244);
  }

  .active {
    color: orange;
  }
</style>
