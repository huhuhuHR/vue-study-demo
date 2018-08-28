<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <h2>Essential Links</h2>
    <ul>
      <li>Core Docs</li>
    </ul>
    <h2>Ecosystem</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data: function () {
    return {
      msg: 'Welcome to your vue.js app'
    }
  }
}
</script>

<style scoped lang="less">
  .hello {
    color: red;
    font-size: 0.45rem;
    h2 {
      color: blue;
    }
  }
</style>
