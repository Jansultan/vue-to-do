import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VModal from 'vue-js-modal'
import router from './router/index'
import store from './store/index'
import ApiPlugin from './plugins/api'
import LoadPlugin from './plugins/load'

import 'material-design-icons-iconfont'

// Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VModal)
Vue.use(ApiPlugin)
Vue.use(LoadPlugin)

import '@/assets/font/stylesheet.css'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
