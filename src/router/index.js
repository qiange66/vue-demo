import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '../components/index.vue'


import management from './managementRouter' //机构管理路由配置
export default new Router({
  routes: [{
        path: '/',
        name: 'index',
        component: index
    },
    ...management,
  ]
})
