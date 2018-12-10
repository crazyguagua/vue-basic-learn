<template>
    <div class="demo">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">当前时间：{{dt | myFilter('yyyy-mm-dd hh:mm:ss')}}</li>
            </ol>
        </nav>
        <form class="form-inline">
            <div class="form-group mb-2">
                <label for="staticEmail2">编号</label>
                <input type="text" class="form-control" placeholder="请输入id" v-model="id">
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2">姓名</label>
                <input type="text" class="form-control" v-model="name" @keyup.enter="add" placeholder="请输入姓名">
                <!-- 在input 绑定keyup 事件修饰符.enter .enter=.13  可以直接写键盘码 回车的时候 执行添加事件 -->
            </div>
            <button type="button" class="btn btn-primary mb-2" @click="add">添加</button>
            <div class="form-group mx-sm-3 mb-2">
                <label>根据姓名搜索</label>
                <!-- vue 中所有的指令 都已 v-开头 -->
                <input type="text" class="form-control" v-model="query" v-focus v-color="color">
            </div>
        </form>
        <simpleTable :query="query" :columns="columns" :list="list" :filterMethod="filterMethod" />
    </div>
</template>

<script>
    import simpleTable from '_c/simpleTable'
    import Vue from 'vue'
    //自定义全局按键值
    Vue.config.keyCodes.f2 =113 
    export default {
        components: {
            simpleTable
        },
        directives:{
            focus:{ //指令名不能带v-前缀，使用的时候加上v-前缀
                //参数是一个对象 ，有一些指令相关的函数，这些函数可以再特定阶段执行
                bind:(el)=>{
                    //每当指令绑定到元素上的时候，会立即执行，只执行一次
                    //在bind,inserted,updated 第一个参数永远都是el ,原生dom对象
                    //在元素绑定了指令的时候，还没有插入到dom中去，这时调用el.focus()没有作用
                    //因为元素只有插入到dom中，才能获取焦点
                    //和js行为相关的指令，最好放到bind中执行
                    el.focus()
                },
                inserted:(el)=>{
                    //元素插入到dom的时候执行 触发一次
                    el.focus()
                },
                updated:(el)=>{
                    //当VNode更新的时候会执行update ,可能会触发很多次
                }
            },
            color:{
                bind:(el,binding)=>{
                    //样式只要绑定给了元素，不管元素有没有插入到页面中去，这个元素有了一个内联样式
                    //将来浏览器引擎必然会解析这个样式，应用给元素
                    //和样式相关的指令，一般都可以再bind中执行
                    log(binding.name)
                    log(binding.value) //指令的绑定值
                    log(binding.expression) //指令绑定值的字符串形式
                    el.style.color=binding.value //这里操作dom是有效的，在页面出入后颜色会变 ，但是在这里调用el.focus()这种行为是没有意义的
                }
            }
        },
        filters: {
            myFilter: (val, pattern) => {
                let year = val.getFullYear()
                let month = val.getMonth() + 1
                month = month.toString().padStart(2, '0') //不足2位补零
                // month= month<10?'0'+month:month
                let day = val.getDay()
                if (pattern && pattern.toLowerCase() === 'yyyy-mm-dd') {

                    return `${year}-${month}-${day}`
                } else if (pattern && pattern.toLowerCase() === 'yyyy-mm-dd hh:mm:ss') {
                    let hour = val.getHours().toString().padStart(2,'0')
                    let minute = val.getMinutes().toString().padStart(2,'0')
                    let second = val.getSeconds().toString().padStart(2,'0')
                    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
                }
                return val
            }
        },
        data() {
            return {
                list: [{
                    id: 1,
                    name: '张三',
                    acct: 'zhangsan',
                    date: new Date(2018, 1, 2),
                    tel: '1388888888'
                }, {
                    id: 2,
                    name: '李四',
                    acct: 'lisi',
                    date: new Date(2018, 6, 1),
                    tel: '1388888888'
                }, {
                    id: 3,
                    name: '王五',
                    acct: 'wangwu',
                    date: new Date(2018, 8, 3),
                    tel: '1388888888'
                }, {
                    id: 4,
                    name: '赵六',
                    acct: 'zhaoliu',
                    tel: '1388888888',
                    date: new Date(2018, 5, 2)
                }, {
                    id: 5,
                    name: '老⑦',
                    acct: 'laoqi',
                    date: new Date(2018, 9, 2),
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
                    },
                    {
                        key: 'date',
                        width: 100,
                        title: '注册时间',
                        render: (h, row) => {
                            //通常过滤器是在{{}}表达式中使用 原来$options.filters 也可以使用 ，但是感觉在这里就没必要用filter了
                            return h('span', {}, this.$options.filters.myFilter(row.date, 'yyyy-mm-dd'))
                        }
                    }, {
                        key: 'tel',
                        width: 100,
                        title: '电话'
                    }, {
                        render: (h, row) => {
                            return h('button', {
                                class: 'btn btn-primary btn-sm',
                                on: {
                                    click: () => {
                                        this.delete(row.id)
                                    }
                                }
                            }, '删除')
                        },
                        width: 100,
                        title: '操作'
                    }
                ],
                name: '',
                id: '',
                query: '',
                dt: new Date(),
                color:'#218721'
            }
        },
        methods: {
            add() {
                let u = {
                    id: this.id,
                    name: this.name,
                    date: new Date(),
                    tel: '13888888888'
                }
                this.list.push(u)
                this.id = ''
                this.name = ''
            },
            filterMethod(query) {
                // let newList = []
                // this.list.forEach(item=>{
                //     if(item.name.indexOf(query)>-1){
                //         newList.push(item)
                //     }
                // })
                // return newList

                // forEach,some,filter,findIndex 这些方法都是数组的新方法，会对数据进行遍历
                // forEach不能终止循环，some,forEach可以终止循环
                return this.list.filter(item => {
                    return item.name.includes(query) //字符传新方法，判断是否包含
                })
            },
            delete(id) {
                //2中方式从列表中根据id来查找
                // this.list.some((item,index)=>{
                //     //在some方法中 如果return true 则立即终止这个循环
                //     if(item.id == id){
                //         this.list.splice(index,1)
                //         return
                //     }
                // })

                //findIndex 方法

                let index = this.list.findIndex((item, index) => {
                    if (item.id == id) {
                        return true
                    }
                })
                this.list.splice(index, 1)
            }
        }
    }
</script>

<style scoped>
    .demo {
        padding: 20px;
    }
</style>