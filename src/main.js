import Vue from 'vue'

import App from './App.vue'

// import router from './router'

import store from './store'


// 阻止vue生产提示
Vue.config.productionTip = false

// 引入全局css
// @ is an alias to /src
import "@/stylesheets/main.less"

// 引入rem比例
import main from "@/modules/rem.js"

// 引入fontawesome字体库
import "../static/font-awesome-4.7.0/css/font-awesome.css"

// 引入animate.css模块
import "animate.css"

// axios
import axios from "axios"
// 将axios挂载在$http上  使用this.$http   方法
Vue.prototype.$http = axios










// new Vue({
//   el: '#app',
//   components: { App },
//   router, //使用router
//   store,
//   template: '<App/>'
// })
// VUE推荐在绝大多数情况下使用template来创建我们的HTML。然而在一些场景中，我们真的需要JavaScript的完全编程的能力，这就是render函数，它比template更接近编译器。
new Vue({
  // router,
  store,
  main,
  render: h => h(App)
}).$mount('#app')