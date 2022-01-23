require('./bootstrap');
window.Vue = require('vue');

import router from './src/router/index'
import vuetify from '@/plugin/vuetify/index'
import VueToast from 'vue-toast-notification';
// import VeeValidate from 'vee-validate';

import 'vue-toast-notification/dist/index.css';
// Vue.use(VeeValidate);
Vue.use(VueToast);
const axios = require('axios');

Vue.component('main-app', require('@/layout/App.vue').default);

const app = new Vue({
    el:'#app',
    vuetify,
    router,
    VueToast
});
