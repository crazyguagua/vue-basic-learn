<template>
    <div>
        <!--在数组中使用对象判断class 来代替三元表达式 提高可读性 -->
        <h2 :class="['red','italic',{'active':active}]">这是一个大标题。。。。。。。</h2>
        <!-- 在class 中使用对象绑定的时候 ，对象的属性是类名 ，对象属性可带引号，也可以不带引号 属性值是一个标识符-->
        <h5 :class="{active:true,red:true,italic:true}">这是一个小标题。。。。。。。</h5>

        <p :style="[style1,style2]">
            样式的绑定
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active:true,
            style1:{
                background:'red',
                'font-size':'20px'
            },
            style2:{
               'font-style':'italic'
            }
        }
    },
    computed:{
         classArr(){
             return ['red','italic',this.active?'active':'']
         }
    }
}
</script>

<style>
.red{
    color:brown;
}
.italic{
    font-style: italic;
}
.active{
    letter-spacing: .5em; /* letter-spacing 对中文有效 ，word-spacing 对英文单词有效*/
}
</style>
