<template>
    <div>
        <h2>遍历数组</h2>
        <ul>
            <li v-for="(user,index) in users">序号： {{index}}  姓名：{{user.name}}</li>
        </ul>
        <h2>遍历对象</h2>
        <ul>
            <li v-for="(val,key,index) in admin">
                键:{{key}} ,值:{{val}},索引:{{index}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            admin:{
                name:'管理员',
                age:22
            },
            users:[{
                name:'张三',
                age:18
            },{
                name:'李四',
                age:19
            },{
                name:'王五',
                age:20
            }]
        }
    }
}
</script>

<style>

</style>
