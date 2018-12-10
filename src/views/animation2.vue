<template>
    <div class="wrapper">
        <button @click="show=!show">加入购物车</button>
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="show"></div>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show:false
        }
    },
    methods:{
        //el 表示要执行动画的元素,是原生的jsdom对象
        beforeEnter(el){
            //beforeEnter 表示动画入场之前 此时动画尚未开始，可以再beforeEnter中设置元素动画开始之前的样式
            //设置小球开始动画的起始位置
            //在点一次按钮 执行下一次动画的时候，小球在一瞬间又回到了0，0的位置，这时小球是看不见的
            el.style.transform = 'translate(0,0)'
        },
        enter(el,done){
            //下面这句话没有实际的作用， 但是不写的话，动画效果出不来
            //可以任务 el.offsetWidth 是让浏览器刷新 el.offsetHeight el.offsetTop 都可以
            el.offsetTop
            //表示开始之后的样式，这里可以设置小球完成动画之后，结束状态
            el.style.transform ='translate(150px,300px)'
            el.style.transition = 'transform 1s'
             //当动画完成后想让他立即消失，就需要调用一个done函数
             //这个done 函数其实是afterEnter的引用
             done() //这个例子只有入场动画，所以需要在动画完成后执行done让小球消失
        },
        afterEnter(el){
            //动画完成之后
            this.show = !this.show
           
        }
    }
}
</script>

<style>
.wrapper{
    background: #fff;
    width:80%;
    margin:0 auto;
    padding:20px;
}
.ball{
    width:20px;
    height:20px;
    border-radius: 50%;
    background:rgb(211, 98, 98);
    margin-top:20px;
}
</style>
