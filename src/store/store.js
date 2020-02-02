import Vue from 'vue'
import Vuex from 'vuex'
//添加到vue实例
Vue.use(Vuex)
//创建仓库
const store = new Vuex.Store({
    state :{
        userInfor : []
    }
})

export default store