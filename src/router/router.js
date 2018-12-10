const routers = [{
        path: '/home',
        name: 'home',
        redirect:'/home/demo1',
        component: () => import('@/views/home'),
        children: [{
                name: 'demo1',
                path: 'demo1',
                component: () => import('@/views/demo1')
            },
            {
                name: 'demo2',
                path: 'demo2',
                component: () => import('@/views/event')
            }, {
                name: 'demo3',
                path: 'demo3',
                component: () => import('@/views/2wayBind')
            }, {
                name: 'calculator',
                path: 'calculator',
                component: () => import('@/views/calculator')
            },
            {
                name: 'demo4',
                path: 'demo4',
                component: () => import('@/views/class')
            }, {
                name: 'demo5',
                path: 'demo5',
                component: () => import('@/views/vFor')
            }, {
                name: 'table',
                path: 'table',
                component: () => import('@/views/table')
            },
            {
                name: 'lifecycle',
                path: 'lifecycle',
                component: () => import('@/views/lifecycle')
            },
            {
                name: 'animation1',
                path: 'animation1',
                component: () => import('@/views/animation1')
            },
            {
                name: 'animation2',
                path: 'animation2',
                component: () => import('@/views/animation2')
            },
            {
                name: 'animation3',
                path: 'animation3',
                component: () => import('@/views/animation3')
            },
            {
                name: 'component',
                path: '/component',
                component: () => import('@/views/component')
            }
        ]
    },

    {
        name: 'namedView',
        path: '/namedView',
        component: () => import('@/views/namedView'),
        children:[{
            path:'index',
            components:{  
                default:()=>import('@/views/layout/header'),
                left:()=>import('@/views/layout/left'),
                main:()=>import('@/views/layout/main')
            }
        }]
    }

]
export default routers