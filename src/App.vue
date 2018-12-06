<template>
  <div id="app">
      <h2>导航</h2>
      <div class="nav-wrapper">
        <router-link to="/demo1" class="nav"> 跑马灯</router-link>

        <router-link to="/demo2" class="nav"> 事件</router-link>
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
.nav-wrapper{
  margin-bottom: 20px;
}
.nav{
  color:aqua;
  text-decoration: underline;
  cursor:pointer;
  margin-right:20px;
}
</style>
