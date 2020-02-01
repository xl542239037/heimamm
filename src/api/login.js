import axios from 'axios'
//实例化一个axios
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  // 跨域携带cookie
  withCredentials: true
})
//登录
export function login (data) {
  return instance({
    url: '/login',
    method: 'post',
    data
  })
}
//短信
export function sendsms (data) {
  return instance({
    url: '/sendsms',
    method: 'post',
    data
  })
}
//注册
export function register (data) {
  return instance({
    url: '/register',
    method: 'post',
    data
  })
}
