<template>
  <div id="app">
      <h2>导航</h2>
      <div class="navi-wrapper">
        <router-link to="/demo1" class="navi"> 跑马灯</router-link>

        <router-link to="/demo2" class="navi"> 事件</router-link>
        <router-link to="/demo3" class="navi"> 双向绑定</router-link>
        <router-link to="/calculator" class="navi">计算器</router-link>
        <router-link to="/demo4" class="navi">样式绑定</router-link>
        <router-link to="/demo5" class="navi">v-for遍历</router-link>
        <router-link to="/table" class="navi">综合案例</router-link>
      </div>
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.navi-wrapper{
  margin-bottom: 20px;
}
.navi{
  color:aqua;
  text-decoration: underline;
  cursor:pointer;
  margin-right:20px;
}
.navi.router-link-active{
  color:rgb(230, 102, 52);
}
</style>
