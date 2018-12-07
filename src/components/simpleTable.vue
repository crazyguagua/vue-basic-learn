<template>
    <table class="table table-dark table-hover table-striped table-bordered">
        <colgroup>
            <col v-for="col in columns" :width="col.width" />
        </colgroup>
        <thead>
            <tr>
                <th v-for="col in columns">{{col.title}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="l in list">
                <td v-for="col in columns">
                    <template v-if="col.render">
                        <render-oper :row="l" :render="col.render" />
                    </template>
                    <template v-else>
                        <span> {{l[col.key]}}</span>
                    </template>
                </td>
            </tr>
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
            }
        }
    }
</script>

<style>

</style>