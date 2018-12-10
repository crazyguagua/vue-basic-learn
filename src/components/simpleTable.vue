<template>
    <table class="table table-dark table-hover table-striped table-bordered">
        <colgroup>
            <col v-for="(col,index) in columns" :key="index" :width="col.width" />
        </colgroup>
        <thead>
            <tr>
                <th v-for="(col,index) in columns" :key="index">{{col.title}}</th>
            </tr>
        </thead>
        <tbody>
            <template v-if="filterMethod">
                <!-- 现在我们定义了一个search方法 把关键字通过传参的形式，传递给了filterMethod
                    在filterMethod方法内部 通过for循环把符合的数据过滤出来
                -->
                <tr v-for="l in filterMethod(query)" :key="l.id">
                    <td v-for="(col,index) in columns" :key="index">
                        <template v-if="col.render">
                            <render-oper :row="l" :render="col.render" />
                        </template>
                        <template v-else>
                            <span> {{l[col.key]}}</span>
                        </template>
                    </td>
                </tr>
            </template>
            <template v-else>
                <tr v-for="l in list" :key="l.id" >
                    <td v-for="(col,index) in columns" :key="index">
                        <template v-if="col.render">
                            <render-oper :row="l" :render="col.render" />
                        </template>
                        <template v-else>
                            <span> {{l[col.key]}}</span>
                        </template>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script>
    import renderOper from '_c/renderOper'
    export default {
        name: 'simpleTable',
        components: {
            renderOper
        },
        props: {
            columns: {
                type: Array,
                required: true
            },
            list: {
                type: Array,
                required: true
            },
            filterMethod: {
                type: Function
            },
            query: String
        }
    }
</script>

<style>

</style>