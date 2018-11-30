<template>
  <div>
    <div class="mask-layer"></div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .mask-layer {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1001
  }
</style>
