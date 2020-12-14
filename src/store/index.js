import Vue from "vue";
import Vuex from 'vuex'

//1、安装插件
Vue.use(Vuex)

// 2、创建Store对象
const store = new Vuex.Store({
  state: {
    // 存储token
    // Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    userId: localStorage.getItem('userId') ? localStorage.getItem('userId') : ''
  },

  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      // console.log(user)
      // state.Authorization = user.Authorization;
      state.userId = user.userId;
      // localStorage.setItem('Authorization', user.Authorization);
      localStorage.setItem('userId', user.userId);
    },

    remove (state) {
      state.Authorization = '';
      // localStorage.setItem('Authorization', '');
      localStorage.setItem('userId', '');
    }
  }
})

//3、挂载到实例
export default store
