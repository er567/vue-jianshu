import Vue from 'vue'
import ajax from './assets/js/ajax'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './assets/sass/reset/_reset.scss';
import './assets/sass/fonts/common/1.0.0/_common.scss';
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

new Vue({
    el: '#jApp',
	store,
    router
})

