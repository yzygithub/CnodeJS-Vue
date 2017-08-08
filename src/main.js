// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import Icon from 'vue-svg-icon/Icon'//犯错，加了.vue。但是似乎只对第一次编译有影响。编译成功过后，再加回.vue没报错
import App from './App'


Vue.prototype.$http = axios

Vue.component('icon', Icon)

Vue.config.productionTip = false //?

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',/*最后效果将会替换页面中id为app的div元素*/
  router,
  template: '<App/>',/*告知页面这个组件用这样的标签来包裹着,并且使用它*/
  components: { App },/*告知当前页面想使用App这个组件*/
})
