<template>
    <div class="event">
        <div>
            <h2>事件冒泡(.stop修饰 阻止事件向上冒泡)</h2>
            <div class="out" @click="outClick">
                <button @click.stop="innerClick">点我</button>
            </div>
        </div>
        <div>
            <h2>阻止默认行为(.prevent修饰 阻止事件默认行为)</h2>
            <div><a href="https://www.baidu.com" @click.prevent="gobaidu">百度一下</a></div>
        </div>
         <div>
            <h2>阻止默认行为(用.once修饰符只触发一次)</h2>
            <div><a href="https://www.baidu.com" @click.prevent.once="gobaidu">百度一下</a></div>
        </div>
        <div>
            <h2>.capture修饰 先触发div的点击事件，在触发按钮的点击事件</h2>
            <div class="out" @click.capture="outClick">
                <button @click="innerClick">点我</button>
            </div>
        </div>

         <div>
            <h2>.self修饰 点按钮只触发按钮的点击事件，只有点击div才触发div的点击事件</h2>
            <div class="out" @click.self="outClick">
                <button @click="innerClick">点我</button>
            </div>
        </div>

         <div>
            <h2>.self修饰 点按钮只触发按钮的点击事件，只有点击div才触发div的点击事件</h2>
            <div class="outOut" @click="outOutClick">
                最外层div
                <!-- .self并不阻止事件向上冒泡  在按钮的父元素上加.stop并不会阻止事件向上冒泡-->
                <div class="out" @click.self="outClick">
                    外层div
                    <button @click="innerClick">点我</button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'eventTest',
    methods:{
        innerClick(){
            alert('点击了按钮')
        },
        outClick(){
            alert('外部div点击了')
        },
        outOutClick(){
            alert('最外层div点击了')
        },
        gobaidu(){
            alert('点击了百度')
        }
    }
}
</script>

<style>
.outOut{
    background: #7d60ca;
    padding:20px;
}
.out{
    background: #da69bd;
    height:50px;
    padding:10px;
}
</style>
