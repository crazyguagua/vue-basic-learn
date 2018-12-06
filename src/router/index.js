import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './router'
Vue.use(VueRouter)
const router = new VueRouter(
    {
        routes
    }
)

export default router