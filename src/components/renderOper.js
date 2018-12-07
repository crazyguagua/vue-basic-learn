export default {
    name:'renderOper',
    props:{
        row:Object,
        render:Function
    },
    render(h){
        return this.render(h,this.row)
    }
}
