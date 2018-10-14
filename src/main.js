import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入vuex
import {store} from './store'
import './assets/common.css'
//引入v-charts
import VCharts from 'v-charts'
import Vemap from 'v-charts/lib/map.common'
Vue.use(VCharts)
Vue.component(Vemap.name, Vemap)
//引入ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);




new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})

