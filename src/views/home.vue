<template>
  <div >
      <h2>导航</h2>
      <div class="navi-wrapper">
        <router-link to="/home/demo1" class="navi"> 跑马灯</router-link>

        <router-link to="/home/demo2" class="navi"> 事件</router-link>
        <router-link to="/home/demo3" class="navi"> 双向绑定</router-link>
        <router-link to="/home/calculator" class="navi">计算器</router-link>
        <router-link to="/home/demo4" class="navi">样式绑定</router-link>
        <router-link to="/home/demo5" class="navi">v-for遍历</router-link>
        <router-link to="/home/table" class="navi">综合案例</router-link>
         <router-link to="/home/lifecycle" class="navi">生命周期</router-link>
         <router-link to="/home/animation1" class="navi">动画</router-link>
         <router-link to="/home/animation2" class="navi">小球动画</router-link>
          <router-link to="/home/animation3" class="navi">多个元素动画</router-link>
           <router-link to="/home/component" class="navi">组件</router-link>
           <router-link to="/namedView/index" class="navi">命名视图</router-link>
           
      </div>
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
