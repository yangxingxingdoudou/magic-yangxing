// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import "./assets/css/base.css"
import ElementUI from 'element-ui';

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.config.productionTip = true;

/* eslint-disable no-new */
var store = new Vuex.Store({
  state:{},
  mutations:{},
  getters:{}
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render(h){
    return h(App)
  }
})


