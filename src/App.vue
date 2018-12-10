<template>
  <div id="app">
    <transition mode="out-in">
    <router-view></router-view>
    </transition>
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
.v-enter,.v-leave-to{
  opacity: 0;
  /* transform:translateX(100%); */
}
.v-enter-active,.v-leave-active{
  transition:all .3s;
}
</style>
