import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import './assets/styles/index.scss';
import './assets/styles/theme/index.css'
import md5 from "js-md5"
import global_ from "./api/global"
import axios from "axios"
import VueAxios from "vue-axios"
import Message from "./components/Message/index.js";
import "../src/assets/iconfonts/iconfont.css";
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$Global = global_;
Vue.prototype.$md5 = md5
Vue.prototype.$message = Message;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
