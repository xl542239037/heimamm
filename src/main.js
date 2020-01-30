import Vue from 'vue'
import App from './App.vue'
//导入路由 router
import router from './router/router'
//导入elemrnt ui
import Element from 'element-ui'
//导入elm 样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
//注册
Vue.use(Element)
new Vue({
  render: h => h(App),
  //挂载到Vue实例上 router
  router
}).$mount('#app')
