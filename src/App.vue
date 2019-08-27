<template>
  <div :id="appId" style="width: 100%;width: 100%">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      appId: process.env.VUE_APP_NAME
    }
  }
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

