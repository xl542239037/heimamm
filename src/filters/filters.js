import Vue from 'vue'
//导入moment 时间插件
import moment from 'moment'
//全局过滤器
Vue.filter("formatTime",function(time){
    return moment(time).format("YYY-MM-DD")
})