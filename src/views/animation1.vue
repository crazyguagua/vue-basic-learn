<template>
    <div>
        <p>动画</p>
        <div class="info">

            <!-- 1 使用transition 元素把需要动的元素包起来-->
            <transition name="slide">
                <p class="" v-if="show">
                    <span>{{msg}}</span>
                </p>
            </transition>
            <div>
                <button @click="toggle">切换</button>
            </div>
        </div>
        <div class="info">

            <!-- 1 使用transition 元素把需要动的元素包起来-->
            <transition name="slide2">
                <p class="" v-if="show2">
                    <span>{{msg2}}</span>
                </p>
            </transition>
            <div>
                <button @click="toggle2">切换</button>
            </div>
        </div>

        <div class="info">
            <p>使用animation.css 实现动画</p>
            <!-- 使用duration 毫秒值 来分别设置入场和离场的时长-->
            <transition enter-active-class="bounceIn" leave-active-class="bounceOut" :duration="{enter:200,leave:400}">    
                <p v-if="show3" class="animated">
                    <span>我只知道 切尔西是冠军</span>
                </p>
            </transition>
            <button @click="show3 = !show3">toggle</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: '我只知道 阿森纳是冠军',
                msg2: '我只知道 曼城是冠军',
                show: false,
                show2:false,
                show3:false
            }
        },
        methods: {
            toggle() {
                this.show = !this.show
            },
            toggle2(){
                this.show2 = !this.show2
            }
        }
    }
</script>

<style>
    .info {
        width: 600px;
        margin: 0 auto;
        background: indianred;
        font-size: 20px;
        padding: 10px;
        margin-bottom:20px;
        color: #fff;
    }

    /* 自定义两组样式 来控制transition内部的元素实现动画
        这是
        v-enter 是一个时间点 是元素的起始状态 此时还没有进入
        v-leave-to 这也是一个时间点 是动画离开之后 离开的终止状态 此时元素动画已经结束
    */
    .slide-enter,
    .slide-leave-to {
        transform: translateX(100px);
    }

    /*
        这是两个时间段
        .v-enter-active 是入场的时间段
        .v-leave-active 是离场的时间段
    */
    .slide-enter-active,
    .slide-leave-active {
        transition: transform .3s;
    }

    .slide2-enter,.slide2-leave-to{
        opacity: 0;
        transform: translateY(80px);
    }
    .slide2-enter-active,.slide2-leave-active{
        transition:all .3s;
    }
</style>