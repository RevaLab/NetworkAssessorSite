import Vue from 'vue';
import VModal from 'vue-js-modal';
import App from './App.vue';
import router from './router';
import store from './store';
// import axios from 'axios';

Vue.use(VModal);
// Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
