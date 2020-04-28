import Vue from 'vue'
import App from './App.vue'

import {router} from './router/router'
import './css/base.css';//引入全局样式




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
