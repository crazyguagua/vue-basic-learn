<template>
    <div>
        <span id="spanMsg">{{msg}}</span>
    </div>
</template>

<script>
export default {
    name:'lifecycle',
    data(){
        return {
            msg:'xxx'
        }
    },
    beforeCreate(){
        log('beforeCreate')
    },
    created(){
        log(this.msg)
    },
    beforeMount(){
        // let msg = document.getElementById('spanMsg').innerText
        log('before mount')
        // log(msg)
    },
    mounted(){
        let msg = document.getElementById('spanMsg').innerText
        log('mounted')
        log(msg)
    }
}
</script>

<style>

</style>
