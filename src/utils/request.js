//导入axios
import axios from 'axios'
//导入获取token
import {getToken} from './token'
const instance = axios.create({
    baseURL: process.env.VUE_APP_BASEURL,
    withCredentials:true
})
instance.interceptors.request.use(function (config) {
    // 在发送请求之前 干一些 事情
    config.headers.token = getToken()
    return config;
}, function (error) {
    // 请求错误之后 干一些事
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应的数据 干 一些事情
    return response.data;
}, function (error) {
    // 当响应错误的时候 干一些事情
    return Promise.reject(error);
});export default instance