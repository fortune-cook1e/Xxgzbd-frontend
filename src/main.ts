import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/ant-design-vue.ts'
import 'babel-polyfill'
import 'normalize.css'
import './styles/index.scss'
import './permission.ts'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
