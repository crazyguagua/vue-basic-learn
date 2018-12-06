<template>
    <div class="wrapper">
        <div class="maxmum">
            <div class="tool">
                <a class="circle"></a>
                <a class="circle"></a>
                <a class="circle"></a>
            </div>
            <div class="result" ref="result">
                <span>{{showNum}}</span>
            </div>
            <div class="numbers">
                <table class="table">
                    <colgroup>
                        <col width="25%" />
                        <col width="25%" />
                        <col width="25%" />
                        <col width="25%" />
                    </colgroup>
                    <tr>
                        <td class="dark" @click="clear">AC</td>
                        <td class="dark"><sup>+</sup>/<sub>-</sub></td>
                        <td class="dark" @click="operFn('%')">%</td>
                        <td class="oper" @click="operFn('/')">&divide;</td>
                    </tr>
                    <tr>
                        <td @click="numFn(7)">7</td>
                        <td @click="numFn(8)">8</td>
                        <td @click="numFn(9)">9</td>
                        <td class="oper" @click="operFn('*')">x</td>
                    </tr>
                    <tr>
                        <td @click="numFn(4)">4</td>
                        <td @click="numFn(5)">5</td>
                        <td @click="numFn(6)">6</td>
                        <td class="oper" @click="operFn('-')">&ndash;</td>
                    </tr>
                    <tr>
                        <td @click="numFn(1)">1</td>
                        <td @click="numFn(2)">2</td>
                        <td @click="numFn(3)">3</td>
                        <td class="oper" @click="operFn('+')">+</td>
                    </tr>
                    <tr>
                        <td colspan="2" @click="numFn(0)">0</td>
                        <td @click="numFn('.')">.</td>
                        <td class="oper" @click="equalFn">=</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="mini"></div>
    </div>
</template>

<script>
    export default {
        props: {
            value: Number
        },
        data() {
            return {
                showNum: '0',
                operater: '',
                num: '0',
                isNumberMode: true
            }
        },
        mounted() {
            this.checkResult()
        },
        methods: {
            numFn(val) {
                if (this.isNumberMode) {
                    if (this.showNum == 0 && val == 0) {
                        return
                    } else if (this.showNum == 0) {
                        this.showNum = val.toString()
                    } else {
                        this.showNum += val.toString()
                    }
                } else {
                    this.isNumberMode = true
                    this.showNum = val
                }
            },
            checkResult() {
                let width = this.$refs.result.getBoundingClientRect().width
                this.resultWidth = width
            },
            clear() {
                this.showNum = 0
                this.num = 0
                this.operater = ''
            },
            operFn(operater) {
                this.operater = operater
                this.isNumberMode = false
                this.num = this.showNum
            },
            equalFn() {
                if (this.operater) {
                    if (this.num == '不是数字' || (this.operater == '/' && this.showNum == 0)) {
                        this.showNum = '不是数字'
                        this.operater = ''
                        return
                    }
                    let str = eval(`parseFloat(this.num)${this.operater}parseFloat(this.showNum)`)
                    this.showNum = str
                    this.operater = ''
                    this.$emit('input', parseFloat(str))
                }
            }
        }
    }
</script>

<style lang="less">
    .maxmum {
        border-radius: 3px;
        background: #333;
        width: 232px;
        position: relative;

        .tool {
            position: absolute;
            left: 3px;
            top: 3px;

            .circle {
                width: 14px;
                height: 14px;
                display: inline-block;
                margin-right: 8px;
                border-radius: 50%;
                background: rgb(109, 109, 109);
            }
        }

        .result {
            padding-top: 20px;
            height: 60px;
            line-height: 60px;
            font-size: 50px;
            color: #fff;
            text-align: right;
            margin-right: 5px;
        }

        .table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;

            td {
                border-right: 1px solid #333;
                border-bottom: 1px solid #333;
                background: #626162;
                text-align: center;
                padding: 10px;
                color: #fff;
                font-size: 20px;
                cursor: pointer;
            }

            td.dark {
                background: #424041;
            }

            td.oper {
                background: #f2a33b;
            }

            tr:last-child td:first-child {
                border-bottom-left-radius: 3px;
            }

            tr:last-child td:last-child {
                border-bottom-right-radius: 3px;
            }

        }
    }
</style>