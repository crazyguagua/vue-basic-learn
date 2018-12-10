<template>
    <div class="wrapper">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">列表</li>
            </ol>
        </nav>
        <form class="form-inline">
            <div class="form-group mb-2">
                <label for="staticEmail2">排名</label>
                <input type="text" class="form-control" placeholder="请输入排名" v-model="rank">
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2">球队</label>
                <input type="text" class="form-control" v-model="name" @keyup.enter="add" placeholder="请输入姓名">
                <!-- 在input 绑定keyup 事件修饰符.enter .enter=.13  可以直接写键盘码 回车的时候 执行添加事件 -->
            </div>
            <button type="button" class="btn btn-primary mb-2" @click="add">添加</button>
        </form>
        <table class="table table-striped bordered" style="margin-top:15px;">
            <!-- <thead>
                <tr>
                    <th>排名</th>
                    <th>球队</th>
                </tr>
            </thead> -->
            <tbody>
                <!-- 在实现列表过度的时候 如果需要过度的元素 是通过v-for渲染出来的 不能通过 transition包裹 需要使用transition-group-->
                <!--如果要给v-for循环创建的元素添加动画，需要给列表中的每一项，执行key属性 -->
                <!-- 给 tansition-group 加上appear 属性 实现页面刚展示出来入场时的效果-->
                <transition-group appear tag="ul">
                    <tr v-for="(l,index) in list" :key="l.rank">
                        <td>{{l.rank}}</td>
                        <td>{{l.name}}</td>
                        <td><button @click="del(index)" class="btn btn-danger">删除</button></td>
                    </tr>
                </transition-group>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rank: '',
                name: '',
                list: [{
                    name: '利物浦',
                    rank: 1
                }, {
                    name: '曼城',
                    rank: 2
                }, {
                    name: '热刺',
                    rank: 3
                }, {
                    name: '切尔西',
                    rank: 4
                }, {
                    name: '阿森纳',
                    rank: 5
                }, {
                    name: '曼联',
                    rank: 6
                }]
            }
        },
        methods: {
            add() {
                this.list.push({
                    rank: this.rank,
                    name: this.name
                })
                this.rank = ''
                this.name = ''
            },
            del(i) {
                this.list.splice(i,1)
            },
            change() {
            }
        },
        mounted() {
            this.change()
        },
    }
</script>

<style>
    .wrapper {
        padding: 15px;
    }

    .v-enter,
    .v-leave-to {
        opacity: 0;
        transform: translateY(63px);
    }

    .v-enter-active,
    .v-leave-active {
        transition: all .3s;
    }
    /* .v-move 和 v-leave-active 配合使用可以实现列表后面的元素渐渐的飘上来*/
    .v-move{
        transition:all .3s;
    }
    .v-leave-active{
        position: absolute;
    }
</style>