const routers =[
    {
        name:'demo1',
        path:'/demo1',
        component:()=>import('@/views/demo1')
    },
    {
        name:'demo2',
        path:'/demo2',
        component:()=>import('@/views/event')
    }
]
export default routers