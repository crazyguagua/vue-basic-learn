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
    },{
        name:'demo3',
        path:'/demo3',
        component:()=>import('@/views/2wayBind')
    },{
        name:'calculator',
        path:'/calculator',
        component:()=>import('@/views/calculator')
    },
    {
        name:'demo4',
        path:'/demo4',
        component:()=>import('@/views/class')
    },{
        name:'demo5',
        path:'/demo5',
        component:()=>import('@/views/vFor')
    }
    ,{
        name:'table',
        path:'/table',
        component:()=>import('@/views/table')
    }
]
export default routers