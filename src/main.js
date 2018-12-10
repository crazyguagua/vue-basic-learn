import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
window.log = console.log.bind()
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
