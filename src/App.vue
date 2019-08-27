<template>
  <div :id="process.env.VUE_APP_NAME" style="width: 100%;width: 100%">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="less">
  .size{
    width: 100%;
    height: 100%;
  }
  html,body{
  .size;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
</style>

