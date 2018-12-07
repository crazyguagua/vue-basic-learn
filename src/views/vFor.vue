<template>
    <div>
        <h2>遍历数组</h2>
        <ul>
            <li v-for="(user,index) in users">序号： {{index}}  姓名：{{user.name}}</li>
        </ul>
        <h2>遍历对象</h2>
        <ul>
            <!-- 在遍历对象的时候 除了有val,key 还有index -->
            <li v-for="(a,b,c) in admin">
                键:{{a}} ,值:{{b}},索引:{{c}}
            </li>
        </ul>
        <h2>循环次数</h2>
        <ul>
            <!-- v-for 中可以遍历 数组，对象数组，对象 ，数字 -->
            <!-- 数字遍历的时候从1开始 -->
            <li v-for="count in 10 "> 循环了{{count}}次</li>
        </ul>

        <div>
            <h2>v-for key 的问题</h2>
            <div>
                <p>id: <input type="text" v-model="id">  name: <input type="text" v-model="name"> <button @click="add">添加</button></p>
               
                <ul>
                    <li v-for="user in users" :key="user.id">
                        <input type="checkbox" />{{ user.id}} --- {{user.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:'',
            name:'',
            admin:{
                name:'管理员',
                age:22
            },
            users:[{
                name:'张三',
                id:1,
                age:18
            },{
                name:'李四',
                id:2,
                age:19
            },{
                name:'王五',
                id:3,
                age:20
            }]
        }
    },
    methods:{
        add(){
            // this.users.push({id:this.id,name:this.name})
            this.users.unshift({id:this.id,name:this.name})// 这种情况 如果 v-for 不指定key  选中一个li 再从头部插入的时候 发现选中的li变了
        }
    }
}
</script>

<style>

</style>
