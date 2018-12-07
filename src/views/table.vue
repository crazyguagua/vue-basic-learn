<template>
    <div class="demo">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">主页</li>
            </ol>
        </nav>
        <form class="form-inline">
            <div class="form-group mb-2">
                <label for="staticEmail2" class="sr-only">编号</label>
                <input type="text" readonly class="form-control-plaintext" placeholder="请输入id" v-model="id">
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">帐号</label>
                <input type="text" class="form-control"  v-model="acct" placeholder="请输入帐号">
            </div>
            <button type="submit" class="btn btn-primary mb-2" @click="add">添加</button>
        </form>
        <simpleTable :columns="columns" :list="list"/>
    </div>
</template>

<script>
    import simpleTable from '_c/simpleTable'
    export default {
        components: {
            simpleTable
        },
        data() {
            return {
                list: [{
                    id: 1,
                    name: '张三',
                    acct: 'zhangsan',
                    tel: '1388888888'
                }, {
                    id: 2,
                    name: '李四',
                    acct: 'lisi',
                    tel: '1388888888'
                }, {
                    id: 3,
                    name: '王五',
                    acct: 'wangwu',
                    tel: '1388888888'
                }, {
                    id: 4,
                    name: '赵六',
                    acct: 'zhaoliu',
                    tel: '1388888888'
                }, {
                    id: 5,
                    name: '老⑦',
                    acct: 'laoqi',
                    tel: '1388888888'
                }],
                columns: [{
                    key: 'id',
                    width: 100,
                    title: '编号'
                }, {
                    key: 'name',
                    width: 100,
                    title: '帐号'
                }, {
                    key: 'acct',
                    width: 100,
                    title: '姓名'
                }, {
                    key: 'tel',
                    width: 100,
                    title: '电话'
                }, {
                    render:(h,row)=>{
                       return h('button',{
                           class:'btn btn-primary btn-sm',
                           on:{
                               click:()=>{
                               }
                           }
                       },'删除')
                    },
                    width: 100,
                    title: '操作'
                }],
                acct:'',
                id:''
            }
        },
        methods:{
            add(){

            }
        }
    }
</script>

<style scoped>
    .demo {
        padding: 20px;
    }
</style>