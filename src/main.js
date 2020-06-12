import Vue from 'vue'
import App from './App.vue'

import './bootstrap'
import './httpClient'
import './forms'
import './filters'
import store from './store'



Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
