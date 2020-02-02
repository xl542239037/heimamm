import VueRouter from 'vue-router'
import Vue from 'vue'
//登录
import login from '../views/login/login.vue'
//首页
import index from '../views/index/index.vue';
//学科
import subject from '../views/index/subject/subject.vue'
//用户
import user from '../views/index/user/user.vue'
//数据
import chart from '../views/index/chart/chart.vue'
//题库
import question from '../views/index/question/question.vue'
//企业
import enterprise from '../views/index/enterprise/enterprise.vue'

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
      //学科
      {
        path:'subject',
        component:subject
      },
      //用户
      {
        path:'user',
        component:user
      },
      //数据
      {
        path:'chart',
        component:chart
      },
      //题库
      {
        path:'question',
        component:question
      },
      //企业
      {
        path:'enterprise',
        component:enterprise
      },
    ]
  }
]
const router = new VueRouter({
  routes
})
Vue.use(VueRouter)
export default router
