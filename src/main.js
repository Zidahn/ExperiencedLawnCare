import Vue from 'vue'
import App from '@/App.vue'
import router from '@/Plugins/router'
import store from '@/Store/store'
import '@/Plugins/vuetify'
import '@/Plugins/moment'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
