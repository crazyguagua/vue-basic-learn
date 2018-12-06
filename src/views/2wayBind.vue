<template>
    <div>
        <h2>{{msg}}</h2>
        <div>
            <!-- v-bind:value 只会单向绑定 M -> V 无法实现双向绑定 -->
            <!-- <input type="text" style="width:600px;" v-bind:value="msg"> -->
            <!-- 使用v-model指令可以实现表单元素和model中的数据的双向绑定 -->
            <!-- 表单元素：input(radio,text,address,email) select checkbox textarea -->
            <input type="text" style="width:600px;" v-model="msg">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:'现在，你决定要修补问题追踪系统上的 #53 问题。顺带说明下，Git 并不同任何特定的问题追踪系统打交道。这里为了说明要解决的问题，才把新建的分支取名为 iss53。要新建并切换到该分支，运行 git checkout 并加上 -b 参数：'
        }
    },
    mounted(){
        // setTimeout(()=>{
        //     this.msg = 'xxxxxxx'
        // },3000)
    }
}
</script>

<style>

</style>
