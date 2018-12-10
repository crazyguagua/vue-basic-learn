<template>
    <div class="wrapper">
        <p>
            <button class="btn btn-danger" style="margin-right:15px;" @click="comp = 'login'">登录</button>
            <button class="btn btn-primary"@click="comp = 'register'">注册</button>
        </p>
        <!-- 通过mode 属性，设置组件切换时的模式
            上个组件出场，下个组件才进场
        -->
        <transition mode="out-in">
            <component :is="comp"/>
        </transition>
    </div>
</template>

<script>
import Vue from 'vue'

Vue.component('login',{
    template:'<div>这是登录组件</div>'
})
Vue.component('register',{
    template:'<div>这是注册组件</div>'
})
export default {
    data(){
        return {
            comp:'login'
        }
    }
}
</script>

<style>
.v-enter,.v-leave-to{
    opacity: 0;
    transform:translateX(100px);
}
.v-enter-active,.v-leave-active{
    transition:all .3s;
}
</style>
