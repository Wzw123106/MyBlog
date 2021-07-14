/*
 * @Author: chiLi
 * @Date: 2021-05-12 13:26:23
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入富文本
import QuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'
import 'highlight.js/styles/xcode.css'
Vue.use(QuillEditor)

// post请求是格式化数据调用 qs库
import qs from 'qs';
Vue.prototype.$qs = qs;


// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入axios
import axios from 'axios';
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

Vue.config.productionTip = false

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

// //添加请求拦截器
// axios.interceptors.request.use(config => {
//   //在发送请求之前做某事，比如说 设置loading动画显示

//   alert(1)
//   return config
// }, error => {
//   //请求错误时做些事
//   return Promise.reject(error)
// })

// //添加响应拦截器
// axios.interceptors.response.use(response => {

//   alert(2)
//   //对响应数据做些事，比如说把loading动画关掉
//   return response
// }, error => {
//   //请求错误时做些事
//   return Promise.reject(error)
// })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
