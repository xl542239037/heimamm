import Vue from 'vue'
import App from './App.vue'
//导入路由 router
import router from './router/router'
//导入elemrnt ui
import Element from 'element-ui'
//导入elm 样式
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式
import '../src/style/base.css'
//导入仓库
import store from './store/store'
Vue.config.productionTip = false
//注册
window.console.log(process.env.VUE_APP_BASEURL)
//全局过滤器
import './filters/filters'
Vue.use(Element)

new Vue({
  render: h => h(App),
  //挂载到Vue实例上 router
  router,
  store
}).$mount('#app')
