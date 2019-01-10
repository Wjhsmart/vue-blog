import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'


Vue.use(VueRouter)
Vue.use(VueResource)

/**
 * @description 开启debug模式
 */
Vue.config.debug = true
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
