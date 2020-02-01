import VueRouter from 'vue-router'
import Vue from 'vue'
import login from '../views/login/login.vue'
import index from '../views/index/index.vue';
import subject from '../views/index/subject/subject.vue'
import user from '../views/index/user/user.vue'

const routes = [
  //登录路由
  {
    path: '/login',
    component: login
  },
  //首页路由
  {
    path:'/index',
    component: index,
    children:[
      {
        path:'subject',
        component:subject
      },
      {
        path:'user',
        component:user
      },
    ]
  }
]
const router = new VueRouter({
  routes
})
Vue.use(VueRouter)
export default router
