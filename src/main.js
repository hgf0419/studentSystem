import Vue from 'vue'
import App from './App.vue'

import {router} from './router/router'

import {REQUEST} from "./utils/request"

import './css/base.css';//引入全局样式




Vue.config.productionTip = false

//定义全局方法  引入REQUEST一次即可
Vue.prototype.$Req=REQUEST;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
