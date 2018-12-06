<template>
    <div>
        <div class="button">
            <button @click="begin">开始</button>
            <button @click="end">停止</button>
        </div>
        <div class="text">
            <span>{{text}}</span>
        </div>
    </div>
</template>

<script>
    //跑马灯
    export default {
        name: 'paomadeng',
        data() {
            return {
                text: '这是一个跑马灯',
                running: false
            }
        },
        methods: {
            begin() {
                this.running = true
                this.start()
            },
            end() {
                this.running = false
                clearTimeout(this.timer)
            },
            start() {
                clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    if(this.running){
                        let text = this.text
                        let head = text.substring(0, 1)
                        let tail = text.substring(1)
                        this.text = tail + head
                        this.start()
                    }
                   
                },1000)
            }
        }
    }
</script>

<style>
.text{
    color:blueviolet;
    font-size:20px;
    margin:20px;
}
</style>