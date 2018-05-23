// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

//Vue.prototype.googleApiKey = 'AIzaSyAPWjJTWXPDp03SJI22zWPWsW7WSExRM78';
Vue.prototype.googleApiKey = 'AIzaSyCIAN2SQ6b0TAHRU3Zz_EDa_k4Y4moUAbI';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
