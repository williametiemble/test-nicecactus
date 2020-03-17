import Vue from 'vue'
import router from '@/plugins/VueRouter/VueRouter.js'
import App from '@/App.vue'
import store from '@/store/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
