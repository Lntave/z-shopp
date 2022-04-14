import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rest from '@/css/rest.css'
import TypeNav from '@/components/TypeNav'
// 导入axios
import Axios from 'axios'

Vue.config.productionTip = false

Vue.component('TypeNav',TypeNav)

// 将Axios添加到vue实例中
Vue.prototype.$http = Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
