<!--
 * @Author: chiLi
 * @Date: 2021-05-12 13:26:23
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  
  // 进入页面移除加载动画
  created () {
    document.body.removeChild(document.querySelector('.jz'))   // 加载页面完后移除加载动画
  }
  
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
