import VueRouter from 'vue-router'
import Vue from 'vue'
import login from '../views/login/login.vue'
const routes = [
  {
    path: '/login',
    component: login
  }
]
const router = new VueRouter({
  routes
})
Vue.use(VueRouter)
export default router
