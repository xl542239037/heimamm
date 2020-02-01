import VueRouter from 'vue-router'
import Vue from 'vue'
import login from '../views/login/login.vue'
import index from '../views/index/index.vue';
const routes = [
  //登录路由
  {
    path: '/login',
    component: login
  },
  //首页路由
  {
    path:'/index',
    component: index
  }
]
const router = new VueRouter({
  routes
})
Vue.use(VueRouter)
export default router
