import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);


export const store = new vuex.Store({
    state: {
      count: 0,
      isShow: false
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
        show_state: state => state.isShow = true,
        hide_state: state => state.isShow = false,
    }
  })

